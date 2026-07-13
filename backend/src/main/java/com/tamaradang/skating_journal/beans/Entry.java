package com.tamaradang.skating_journal.beans;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.mongodb.lang.NonNull;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Document
public class Entry {
    
    @Id
    private String id;

    @NonNull
    @Getter
    @Setter
    private String title;

    @NonNull
    @Getter
    @Setter
    private String content;
}
