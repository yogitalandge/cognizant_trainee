package com.cts.training.commentmicroservice.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cts.training.commentmicroservice.entity.Comment;

public interface CommentRepository extends JpaRepository<Comment, Integer> {

}
