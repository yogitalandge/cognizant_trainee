package com.cts.training.mavenweb.entity;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;


@Entity 
@Table(name = "follow")
public class Follow {
	

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	@Column
	private Integer userId;
	@Column
	private Integer followId;
	
	@Column
	@CreationTimestamp
	private LocalDateTime createdOn;
	@Column
	@UpdateTimestamp
	private LocalDateTime updatedOn;
	
	
	
	public Follow(Integer id, Integer userId,Integer followId,LocalDateTime createdOn,LocalDateTime updatedOn,String comment) {
			super();
			this.id = id;
			this.userId = userId;
			this.followId = followId;
			
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



	public Integer getFollowId() {
		return followId;
	}



	public void setFollowId(Integer followId) {
		this.followId = followId;
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
		return "Comment [id=" + id + ", userId=" + userId +",followId="+followId+",createdOn=" + createdOn + ", updatedOn=" + updatedOn + "]";
	
		}
	

	

}
