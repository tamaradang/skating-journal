package com.tamaradang.skating_journal.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.tamaradang.skating_journal.beans.Entry;

public interface EntryRepository extends MongoRepository<Entry, String> {
    
}
