package com.pegadatatools.engine.service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.pegadatatools.engine.model.PegaSchema;
import com.pegadatatools.engine.utils.fileUtils;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.stream.Stream;

@Service
@Slf4j
@RequiredArgsConstructor
public class PegaSchemaServiceImpl implements PegaSchemaService {

    private final ObjectMapper mapper = new ObjectMapper();

    @Value("${pega.schema.filepath}")
    private String pegaSchemaFilePath;

    @Override
    public PegaSchema createSchema(JsonNode requestBody, HttpServletResponse response) {
        try{
            log.debug("[createSchema] Create schema = " + requestBody.toString());

            String schemaName = requestBody.get("name").asText();
            JsonNode caseData = requestBody.get("case");

            if(schemaName.isEmpty()) {
                response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            } else {

                PegaSchema newSchema = new PegaSchema(schemaName);

                newSchema.recursivelyGenerateFromJson(caseData, "pyWorkPage", null);

                response.setContentType("application/json; charset=UTF-8");
                response.setStatus(HttpServletResponse.SC_OK);
                return newSchema;

            }
        }
        catch (Exception ex) {
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            log.error(ex.getMessage());
        }
        return null;
    }

    @Override
    public synchronized Map<String, String> updateSchema(PegaSchema requestBody, HttpServletResponse response) {
        HashMap<String, String> responseMap = new HashMap<>();
        try{
            if(requestBody.getId() == null) {
                requestBody.generateId();
            }
            log.debug("[updateSchema] Update schema = " + requestBody.getName()+ ", id = "+ requestBody.getId());
            File schemaFile = new File(pegaSchemaFilePath.concat(requestBody.getId().toString().concat(".json")));
            mapper.writeValue(schemaFile, requestBody);
            responseMap.put("id", requestBody.getId().toString());
            response.setStatus(HttpServletResponse.SC_OK);

        }
        catch (Exception ex) {
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            log.error(ex.getMessage());
        }
        return responseMap;
    }

    @Override
    public Stream<Map<String, String>> getSchemas(HttpServletResponse response) {
        return fileUtils.listFilesUsingJavaIO(pegaSchemaFilePath).stream()
                .map(item -> {
                    HashMap<String, String> responseMap = new HashMap<>();
                    File schemaFile = new File(pegaSchemaFilePath.concat(item));
                    PegaSchema schema;
                    schema = null;
                    try {
                        schema = mapper.readValue(schemaFile, new TypeReference<PegaSchema>(){});
                    } catch (IOException e) {
                        response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
                        log.error(e.getMessage());
                    }
                    if(schema != null) {
                        responseMap.put("id",  item.replace(".json", ""));
                        responseMap.put("name",  schema.getName());
                    }
                    return responseMap;
                });
    }

    @Override
    public PegaSchema getPegaSchemaById(String id, HttpServletResponse response) {
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
            log.error(ex.getMessage());
        }
        return null;
    }

    @Override
    public void deletePegaSchema(String id, HttpServletResponse response) {
        String fileName = id.concat(".json");
        boolean hasFile = fileUtils.listFilesUsingJavaIO(pegaSchemaFilePath).contains(fileName);
        if(!hasFile) {
            response.setStatus(HttpServletResponse.SC_OK);
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
