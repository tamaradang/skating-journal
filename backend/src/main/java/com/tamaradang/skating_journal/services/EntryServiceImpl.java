package com.tamaradang.skating_journal.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.tamaradang.skating_journal.beans.Entry;
import com.tamaradang.skating_journal.repositories.EntryRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class EntryServiceImpl implements EntryService {

    private final EntryRepository entryRepository;

    @Override
    public List<Entry> getAllEntries() {
        return entryRepository.findAll();
    }

    @Override
    public Optional<Entry> getEntryById(String id) {
        return entryRepository.findById(id);
    }

    @Override
    public Entry createEntry(Entry entry) {
        return entryRepository.save(entry);
    }

    @Override
    public Optional<Entry> updateEntry(String id, Entry entryDetails) {
        return entryRepository.findById(id).map(existingEntry -> {
            existingEntry.setTitle(entryDetails.getTitle());
            existingEntry.setContent(entryDetails.getContent());
            return entryRepository.save(existingEntry);
        });
    }

    @Override
    public boolean deleteEntry(String id) {
        if (!entryRepository.existsById(id)) {
            return false;
        }

        entryRepository.deleteById(id);
        return true;
    }
}
