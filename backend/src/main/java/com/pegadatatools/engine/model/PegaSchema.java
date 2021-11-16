package com.pegadatatools.engine.model;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.node.JsonNodeType;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.*;

@NoArgsConstructor
public class PegaSchema {

    static final String CLASS_NODE_PROP = "pxObjClass";
    static final String DEFAULT_ROOT_NAME = "pyWorkPage";

    @Getter @Setter private UUID id;
    @Getter @Setter private String name;
    private int nodeCounter = 0;

    @Getter @Setter private LinkedList<PegaNode> nodes = new LinkedList<>();
    @Getter @Setter private LinkedHashSet<PegaNodeLink> links = new LinkedHashSet<>();

    public PegaSchema(String name) {
        this.name = name;
        this.id = null;
    }

    public void generateId() {
        this.id = UUID.randomUUID();
    }

    public void addLink (PegaNode from, PegaNode to) {
        links.add(new PegaNodeLink(from.getId(), to.getId()));
    }

    public void recursivelyGenerateFromJson (JsonNode jsonNode, String nodeLabel, PegaNode parentNode) {
        nodeCounter++;

        Iterator<Map.Entry<String, JsonNode>> fields = jsonNode.fields();
        String objectClass = jsonNode.has(CLASS_NODE_PROP) ? jsonNode.get(CLASS_NODE_PROP).asText() : null;
        PegaNode candidateNode = new PegaNode(String.valueOf(nodeCounter),nodeLabel, objectClass, parentNode);

        int existIdx = nodes.indexOf(candidateNode);
        PegaNode pegaNode = existIdx > 0 ?  nodes.get(existIdx) : candidateNode;

        if(parentNode != null){
            addLink(parentNode, pegaNode);
        }

        fields.forEachRemaining(item -> {

            pegaNode.addPropertyFromJson(item, pegaNode.getPath());

            if(item.getValue().getNodeType() == JsonNodeType.OBJECT){
                recursivelyGenerateFromJson(item.getValue(), item.getKey(), pegaNode);
            }
            if(item.getValue().getNodeType() == JsonNodeType.ARRAY) {
                Iterator<JsonNode> nodeIterator = item.getValue().elements();
                nodeIterator.forEachRemaining(node -> recursivelyGenerateFromJson(node, item.getKey(), pegaNode));
            }
        });
        if (existIdx < 0) {
            nodes.add(pegaNode);
        }
    }

    @NoArgsConstructor
    static public class PegaNode {

        @Getter @Setter private String id;
        @Getter @Setter private String label;
        @Getter @Setter private String path;
        @Getter @Setter private String customName;
        @Getter @Setter private String objClass;
        @Getter @Setter private String tableName;
        @Getter @Setter private LinkedHashSet<PegaNodeProperty> properties = new LinkedHashSet<>();

        public PegaNode(String id, String label, String objClass, PegaNode parent) {
            this.id = id;
            this.label = label;
            this.objClass = objClass;
            this.path = parent == null ? PegaSchema.DEFAULT_ROOT_NAME : parent.getPath().concat(".").concat(label);
        }

        public void addProperty(String propertyName, String propertyType, String propertyClass, String nodePath) {
            properties.add(
                    new PegaNodeProperty(propertyName, propertyType, propertyClass, nodePath)
            );
        }

        public void addPropertyFromJson (Map.Entry<String, JsonNode> node, String nodePath) {
            JsonNodeType propertyType = node.getValue().getNodeType();
            String propertyName = node.getKey();
            String propertyObjClass = propertyType == JsonNodeType.OBJECT && node.getValue().has(PegaSchema.CLASS_NODE_PROP) ?
                    node.getValue().get(PegaSchema.CLASS_NODE_PROP).asText() : null;
            addProperty(propertyName, propertyType.toString(), propertyObjClass, nodePath);
        }

        @Override
        public boolean equals(Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;
            PegaNode that = (PegaNode) o;
            return this.hashCode() == that.hashCode();
        }

        @Override
        public int hashCode() {
            return Objects.hash(label, objClass);
        }
    }

    @NoArgsConstructor
    static public class PegaNodeProperty {
        @Getter @Setter private String name;
        @Getter @Setter private String type;
        @Getter @Setter private String path;
        @Getter @Setter private String objClass;
        @Getter @Setter private String customName;
        @Getter @Setter private String description;

        public PegaNodeProperty(String name, String type, String objClass, String path) {
            this.name = name;
            this.type = type;
            this.objClass = objClass;
            this.path = path.concat(".").concat(name);
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

    @NoArgsConstructor
    static public class PegaNodeLink {
        @Getter @Setter private String source;
        @Getter @Setter private String target;
        public PegaNodeLink(String source, String target) {
            this.source = source;
            this.target = target;
        }

        @Override
        public int hashCode() {
            return Objects.hash(this.source, this.target);
        }

        @Override
        public boolean equals(Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;
            PegaNodeLink that = (PegaNodeLink) o;
            return this.hashCode() == that.hashCode();
        }
    }

}


