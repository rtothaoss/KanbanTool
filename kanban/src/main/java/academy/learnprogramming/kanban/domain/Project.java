package academy.learnprogramming.kanban.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter @Setter private Long id;

    @Getter @Setter private String projectName;
    @Getter @Setter private String projectIdentifier;
    @Getter @Setter private String description;
    @Getter @Setter private Date start_date;
    @Getter @Setter private Date end_date;

    @Getter @Setter private Date created_At;
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
