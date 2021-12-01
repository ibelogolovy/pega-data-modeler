package com.pegadatatools.engine.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.pegadatatools.engine.model.PegaSchema;

import javax.servlet.http.HttpServletResponse;
import java.util.Map;
import java.util.stream.Stream;

public interface PegaSchemaService {

    PegaSchema createSchema(JsonNode schema, HttpServletResponse response);

    Map<String, String> updateSchema(PegaSchema schema, HttpServletResponse response);

    Stream<Map<String, String>> getSchemas(HttpServletResponse response);

    PegaSchema getPegaSchemaById(String id, HttpServletResponse response);

    void deletePegaSchema(String id, HttpServletResponse response);
}
