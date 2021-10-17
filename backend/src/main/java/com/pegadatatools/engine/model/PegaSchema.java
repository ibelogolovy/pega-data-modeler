package com.pegadatatools.engine.model;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.node.JsonNodeType;

import java.util.*;

public class PegaSchema {

    private String id;
    private String name;
    private int nodeCounter = 0;

    private LinkedList<PegaNode> nodes = new LinkedList<>();
    private LinkedList<PegaNodeLink> links = new LinkedList<>();

    public PegaSchema(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public LinkedList<PegaNode> getNodes() {
        return nodes;
    }

    public LinkedList<PegaNodeLink> getLinks() {
        return links;
    }

    public void addLink (PegaNode from, PegaNode to) {
        links.add(new PegaNodeLink(from.getId(), to.getId()));
    }

    public void recursivelyGenerateFromJson (JsonNode jsonNode, String nodeLabel, PegaNode parentNode) {
        nodeCounter++;

        Iterator<Map.Entry<String, JsonNode>> fields = jsonNode.fields();
        String objectClass = jsonNode.has("pxObjClass") ? jsonNode.get("pxObjClass").asText() : null;
        PegaNode candidateNode = new PegaNode(String.valueOf(nodeCounter),nodeLabel, objectClass);

        int existIdx = nodes.indexOf(candidateNode);
        PegaNode pegaNode = existIdx > 0 ?  nodes.get(existIdx) : candidateNode;

        if(parentNode != null){
            addLink(parentNode, pegaNode);
        }

        fields.forEachRemaining(item -> {

            pegaNode.addPropertyFromJson(item);

            if(item.getValue().getNodeType() == JsonNodeType.OBJECT){
                recursivelyGenerateFromJson(item.getValue(),item.getKey(), pegaNode);
            }
            if(item.getValue().getNodeType() == JsonNodeType.ARRAY) {
                Iterator<JsonNode> nodeIterator = item.getValue().elements();
                nodeIterator.forEachRemaining(node -> {
                    recursivelyGenerateFromJson(node,item.getKey(), pegaNode);
                });
            }
        });
        nodes.add(pegaNode);
    }

    private class PegaNode {

        private String id;
        private String label;
        private String customName;


        private String objClass;
        private LinkedHashSet<PegaNodeProperty> properties = new LinkedHashSet<>();

        public PegaNode(String id, String label, String objClass) {
            this.id = id;
            this.label = label;
            this.objClass = objClass;
        }

        public void addProperty(String propertyName, String propertyType, String propertyClass) {
            properties.add(
                    new PegaNodeProperty(propertyName, propertyType, propertyClass)
            );
        }

        public void addPropertyFromJson (Map.Entry<String, JsonNode> node) {
            JsonNodeType propertyType = node.getValue().getNodeType();
            String propertyName = node.getKey();
            String propertyObjClass = propertyType == JsonNodeType.OBJECT && node.getValue().has("pxObjClass") ?
                    node.getValue().get("pxObjClass").asText() : null;
            addProperty(propertyName, propertyType.toString(), propertyObjClass);
        }

        public String getId() {
            return id;
        }

        public String getObjClass() {
            return objClass;
        }

        public String getLabel() {
            return label;
        }

        public String getCustomName() {
            return customName;
        }

        public void setCustomName(String customName) {
            this.customName = customName;
        }

        public LinkedHashSet<PegaNodeProperty> getProperties() {
            return properties;
        }

        @Override
        public boolean equals(Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;
            PegaNode pegaNode = (PegaNode) o;
            return Objects.equals(objClass, pegaNode.objClass) && Objects.equals(label, pegaNode.label);
        }

        @Override
        public int hashCode() {
            return Objects.hash(id, label, properties);
        }
    }

    private class PegaNodeProperty {
        private String name;
        private String type;
        private String objClass;
        private String customName;
        private String description;

        public String getName() {
            return name;
        }

        public String getType() {
            return type;
        }

        public String getObjClass() {
            return objClass;
        }

        public String getCustomName() {
            return customName;
        }

        public void setCustomName(String customName) {
            this.customName = customName;
        }

        public String getDescription() {
            return description;
        }

        public void setDescription(String description) {
            this.description = description;
        }

        public PegaNodeProperty(String name, String type, String objClass) {
            this.name = name;
            this.type = type;
            this.objClass = objClass;
        }

        @Override
        public int hashCode() {
            return Objects.hash(this.name, this.type, this.objClass);
        }

        @Override
        public boolean equals(Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;
            PegaNodeProperty that = (PegaNodeProperty) o;
            return this.hashCode() == that.hashCode();
        }
    }

    private class PegaNodeLink {
        private String source;
        private String target;

        public PegaNodeLink(String source, String target) {
            this.source = source;
            this.target = target;
        }

        public String getSource() {
            return source;
        }

        public String getTarget() {
            return target;
        }

    }

}


