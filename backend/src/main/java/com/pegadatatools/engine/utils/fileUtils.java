package com.pegadatatools.engine.utils;

import java.io.File;
import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class fileUtils {
    // get files in directory
    public static Set<String> listFilesUsingJavaIO(String dir) {
        File theDir = new File(dir);
        if (!theDir.exists()){
            theDir.mkdirs();
            return new HashSet<String>();
        }
        return Stream.of(theDir.listFiles())
                .filter(file -> !file.isDirectory())
                .map(File::getName)
                .collect(Collectors.toSet());
    }
}
