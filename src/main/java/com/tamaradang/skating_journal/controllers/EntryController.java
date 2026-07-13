package com.tamaradang.skating_journal.controllers;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.tamaradang.skating_journal.beans.Entry;
import com.tamaradang.skating_journal.services.EntryService;

import jakarta.validation.Valid;
import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@RequestMapping("/api/entries")
public class EntryController {

    private final EntryService entryService;

    @GetMapping(value = {"/",""})
    public List<Entry> getAllEntries() {
        return entryService.getAllEntries();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Entry> getEntryById(@PathVariable String id) {
        return entryService.getEntryById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping(value = {"/",""}, headers = "Content-Type=application/json")
    public ResponseEntity<Entry> createEntry(@Valid @RequestBody Entry entry) {
        Entry saved = entryService.createEntry(entry);
        return ResponseEntity.status(HttpStatus.CREATED).body(saved);
    }

    @PutMapping(value = "/{id}", headers = "Content-Type=application/json")
    public ResponseEntity<Entry> updateEntry(@PathVariable String id, @Valid @RequestBody Entry entryDetails) {
        return entryService.updateEntry(id, entryDetails)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEntry(@PathVariable String id) {
        return entryService.deleteEntry(id)
                ? ResponseEntity.noContent().build()
                : ResponseEntity.notFound().build();
    }
}
