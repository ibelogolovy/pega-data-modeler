package com.pegadatatools.engine.controller;

import com.fasterxml.jackson.core.JsonProcessingException;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.pegadatatools.engine.model.PegaSchema;
import com.fasterxml.jackson.databind.JsonNode;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.File;
import java.io.IOException;
import java.util.*;
import java.util.stream.Stream;

import com.pegadatatools.engine.utils.fileUtils;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api")
public class PegaAPIController {

    Logger logger = LoggerFactory.getLogger(PegaAPIController.class);

    private ObjectMapper mapper = new ObjectMapper();

    @Autowired
    private RestTemplate restTemplate;

    @Value("${pega.schema.filepath}")
    private String pegaSchemaFilePath;

    @RequestMapping(value = "/pega", method = RequestMethod.GET, produces = "application/hal+json;charset=utf8")
    public @ResponseBody String getPegaDataFromUrl(@RequestParam MultiValueMap<String,String> allParams, @RequestHeader HttpHeaders headers) throws JsonProcessingException {

        String url = allParams.getFirst("url");
        allParams.remove("url");

        logger.debug("[getPegaDataFromUrl] Ask pega api " + url);

        HttpHeaders reqHeaders = new HttpHeaders();
        reqHeaders.setContentType(MediaType.APPLICATION_JSON);
        reqHeaders.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
        reqHeaders.set("Authorization", headers.getFirst("Authorization"));

        HttpEntity entity = new HttpEntity(reqHeaders);

        UriComponentsBuilder builder = UriComponentsBuilder.fromUriString(url) // rawValidURl = http://example.com/hotels
                .queryParams(allParams); // The allRequestParams must have been built for all the query params
        UriComponents uriComponents = builder.build().encode(); // encode() is to ensure that characters like {, }, are preserved and not encoded. Skip if not needed.

        ResponseEntity<String> response = restTemplate.exchange(
                uriComponents.toUri(),
                HttpMethod.GET,
                entity,
                String.class);

        return response.getBody();
    }

    @RequestMapping(value = "/pega/schema", method = RequestMethod.POST)
    public PegaSchema createSchema(HttpServletResponse response, @RequestBody JsonNode requestBody, HttpSession session) throws IOException {
        try{
            logger.debug("[createSchema] Create schema = " + requestBody.toString());

            String schemaName = requestBody.get("name").asText();
            JsonNode caseData = requestBody.get("case");

            if(schemaName.isEmpty()) {
                response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            } else {

                Iterator<Map.Entry<String, JsonNode>> keyIterator = caseData.fields();
                PegaSchema newSchema = new PegaSchema(schemaName);

                newSchema.recursivelyGenerateFromJson(caseData, "pyWorkPage", null);

                response.setContentType("application/json; charset=UTF-8");
                response.setStatus(HttpServletResponse.SC_OK);
                return newSchema;

            }
        }
        catch (Exception ex) {
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            logger.error(ex.getStackTrace().toString());
        }
        return null;
    }


    @RequestMapping(value = "/pega/schema", method = RequestMethod.PUT)
    public Map<String, String> updateSchema(HttpServletResponse response, @RequestBody PegaSchema requestBody, HttpSession session) throws IOException {
        HashMap<String, String> responseMap = new HashMap<>();
        try{
            if(requestBody.getId() == null) {
                requestBody.generateId();
            }
            logger.debug("[updateSchema] Update schema = " + requestBody.getName()+ ", id = "+ requestBody.getId());
            File schemaFile = new File(pegaSchemaFilePath.concat(requestBody.getId().toString().concat(".json")));
            mapper.writeValue(schemaFile, requestBody);
            responseMap.put("id", requestBody.getId().toString());
            response.setStatus(HttpServletResponse.SC_OK);

        }
        catch (Exception ex) {
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            logger.error(ex.getStackTrace().toString());
        }
        return responseMap;
    }

    @RequestMapping(value = "/pega/schema", method = RequestMethod.GET)
    public Stream<Map<String, String>> getPegaSchemas(HttpServletResponse response) throws IOException {
        return fileUtils.listFilesUsingJavaIO("./schemes/").stream()
                .map(item -> {
                    HashMap<String, String> responseMap = new HashMap<>();
                    File schemaFile = new File(pegaSchemaFilePath.concat(item));
                    PegaSchema schema = null;
                    try {
                        schema = mapper.readValue(schemaFile, new TypeReference<PegaSchema>(){});
                    } catch (IOException e) {
                        response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
                        logger.error(e.getStackTrace().toString());
                    }
                    responseMap.put("id",  item.replace(".json", ""));
                    responseMap.put("name",  schema.getName());
                    return responseMap;
                });
    }

    @RequestMapping(value = "/pega/schema/{id}", method = RequestMethod.GET)
    public PegaSchema getPegaSchemaById(HttpServletResponse response, @PathVariable("id") String id) throws IOException {
        try{
            boolean hasFile = fileUtils.listFilesUsingJavaIO(pegaSchemaFilePath).contains(id.concat(".json"));
            if(!hasFile) {
                response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
                return null;
            }
            File schemaFile = new File(pegaSchemaFilePath.concat(id.concat(".json")));
            response.setContentType("application/json; charset=UTF-8");
            return mapper.readValue(schemaFile, new TypeReference<PegaSchema>(){});
        }
        catch (Exception ex) {
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            logger.error(ex.getStackTrace().toString());
        }
        return null;
    }

    @RequestMapping(value = "/pega/schema/{id}", method = RequestMethod.DELETE)
    public void deletePegaSchema(HttpServletResponse response, @PathVariable("id") String id) throws IOException {
        String fileName = id.concat(".json");
        boolean hasFile = fileUtils.listFilesUsingJavaIO(pegaSchemaFilePath).contains(fileName);
        if(!hasFile) {
            response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
        } else {
            File file = new File(pegaSchemaFilePath.concat(fileName));
            if(file.delete()) {
                response.setStatus(HttpServletResponse.SC_OK);
            } else {
                response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            }
        }
    }
}
