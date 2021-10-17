package com.pegadatatools.engine.controller;

import com.fasterxml.jackson.core.JsonProcessingException;

import com.pegadatatools.engine.model.PegaSchema;
import com.pegadatatools.engine.model.PegaSetting;
import com.fasterxml.jackson.databind.JsonNode;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.*;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api")
public class PegaAPIController {

    Logger logger = LoggerFactory.getLogger(PegaAPIController.class);

    @Autowired
    private RestTemplate restTemplate;

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

        return  response.getBody();
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
            ex.printStackTrace(response.getWriter());
        }
        return null;
    }

}
