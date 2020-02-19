package com.cts.training.mavenweb.entity;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity 
@Table(name = "blockeduser")
public class BlockedUser {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	@Column
	private Integer userId;
	@Column
	private LocalDateTime createdOn;
	@Column
	private LocalDateTime updatedOn;
	
	
	public BlockedUser(Integer id, Integer userId,LocalDateTime createdOn,LocalDateTime updatedOn) {
		super();
		this.id = id;
		this.userId = userId;
		this.createdOn = createdOn;
		this.updatedOn = updatedOn;
	}


	public Integer getId() {
		return id;
	}


	public void setId(Integer id) {
		this.id = id;
	}


	public Integer getUserId() {
		return userId;
	}


	public void setUserId(Integer userId) {
		this.userId = userId;
	}


	public LocalDateTime getCreatedOn() {
		return createdOn;
	}


	public void setCreatedOn(LocalDateTime createdOn) {
		this.createdOn = createdOn;
	}


	public LocalDateTime getUpdatedOn() {
		return updatedOn;
	}


	public void setUpdatedOn(LocalDateTime updatedOn) {
		this.updatedOn = updatedOn;
	}
	
	@Override
	public String toString() {
		return "BlockedUser [id=" + id + ", userId=" + userId +",createdOn=" + createdOn + ", updatedOn=" + updatedOn + "]";
	
		}
	
}
