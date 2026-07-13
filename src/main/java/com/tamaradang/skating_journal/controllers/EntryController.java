package com.tamaradang.skating_journal.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.tamaradang.skating_journal.beans.Entry;
import com.tamaradang.skating_journal.repositories.EntryRepository;

import jakarta.validation.Valid;
import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@RequestMapping("/api/entries")
public class EntryController {
    
    private final EntryRepository entryRepository;

    @GetMapping
    public List<Entry> getAllEntries() {
        return entryRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Entry> getEntryById(@PathVariable String id) {
        return entryRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Entry> createEntry(@Valid @RequestBody Entry entry) {
        Entry saved = entryRepository.save(entry);
        return ResponseEntity.status(HttpStatus.CREATED).body(saved);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Entry> updateEntry(@PathVariable String id, @Valid @RequestBody Entry entryDetails) {
        Optional<Entry> existingEntry = entryRepository.findById(id);
        if (existingEntry.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        Entry entry = existingEntry.get();
        entry.setTitle(entryDetails.getTitle());
        entry.setContent(entryDetails.getContent());
        return ResponseEntity.ok(entryRepository.save(entry));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEntry(@PathVariable String id) {
        if (!entryRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }

        entryRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
