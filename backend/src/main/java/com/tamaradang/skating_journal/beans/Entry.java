package com.tamaradang.skating_journal.beans;

import java.time.LocalDateTime;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.format.annotation.DateTimeFormat;

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
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    private LocalDateTime practiceDate;

    @NonNull
    @Getter
    @Setter
    private String title;

    @NonNull
    @Getter
    @Setter
    private String content;
}
