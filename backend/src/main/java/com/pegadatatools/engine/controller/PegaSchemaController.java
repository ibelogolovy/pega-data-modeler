package com.pegadatatools.engine.controller;

import com.fasterxml.jackson.databind.JsonNode;
import com.pegadatatools.engine.model.PegaSchema;
import com.pegadatatools.engine.service.PegaSchemaService;
import lombok.RequiredArgsConstructor;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.Map;
import java.util.stream.Stream;

@RestController
@RequiredArgsConstructor
@Validated
@RequestMapping("/api/pega/schema")
public class PegaSchemaController {

    private final PegaSchemaService pegaSchemaService;

    @RequestMapping(method = RequestMethod.POST)
    public PegaSchema createSchema(@RequestBody JsonNode requestBody, HttpServletResponse response) {
        return pegaSchemaService.createSchema(requestBody, response);
    }

    @RequestMapping(method = RequestMethod.PUT)
    public Map<String, String> updateSchema(@RequestBody PegaSchema requestBody, HttpServletResponse response) {
        return pegaSchemaService.updateSchema(requestBody, response);
    }

    @RequestMapping(method = RequestMethod.GET)
    public Stream<Map<String, String>> getSchemas(HttpServletResponse response) {
        return pegaSchemaService.getSchemas(response);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public PegaSchema getPegaSchemaById(@PathVariable("id") String id, HttpServletResponse response) {
        return pegaSchemaService.getPegaSchemaById(id, response);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deletePegaSchema(@PathVariable("id") String id, HttpServletResponse response) {
        pegaSchemaService.deletePegaSchema(id, response);
    }
}
