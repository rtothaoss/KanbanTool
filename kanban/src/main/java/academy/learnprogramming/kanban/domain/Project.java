package academy.learnprogramming.kanban.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.Date;

@Entity
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter @Setter private Long id;

    @NotBlank(message = "Project name is required")
    @Getter @Setter private String projectName;

    @NotBlank(message = "Project Identifier is required")
    @Size(min=4, max=5, message="Please use 4 to 5 characters")
    @Column(updatable = false, unique = true)
    @Getter @Setter private String projectIdentifier;

    @NotBlank(message = "Project description is required")
    @Getter @Setter private String description;

    @JsonFormat(pattern = "yyyy-mm-dd")
    @Getter @Setter private Date start_date;

    @JsonFormat(pattern = "yyyy-mm-dd")
    @Getter @Setter private Date end_date;

    @JsonFormat(pattern = "yyyy-mm-dd")
    @Getter @Setter private Date created_At;

    @JsonFormat(pattern = "yyyy-mm-dd")
    @Getter @Setter private Date updated_At;

    public Project() {
    }



    @PrePersist
    protected void onCreate() {
        this.created_At = new Date();
    }

    @PreUpdate
    protected void onUpdate() {
        this.updated_At = new Date();
    }


}
