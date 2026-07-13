package com.tamaradang.skating_journal.services;

import java.util.List;
import java.util.Optional;

import com.tamaradang.skating_journal.beans.Entry;

public interface EntryService {

    List<Entry> getAllEntries();

    Optional<Entry> getEntryById(String id);

    Entry createEntry(Entry entry);

    Optional<Entry> updateEntry(String id, Entry entryDetails);

    boolean deleteEntry(String id);
}
