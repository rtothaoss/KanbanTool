package academy.learnprogramming.kanban.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import java.util.Date;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter @Setter private Long id;

    @Email(message = "Username needs to be an email")
    @NotBlank(message = "username is required")
    @Column(unique = true)
    @Getter @Setter private String username;

    @NotBlank(message = "Please enter your full name")
    @Getter @Setter private String fullName;

    @NotBlank(message = "Password field is required")
    @Getter @Setter private String password;

    @Transient
    @Getter @Setter private String confirmPassword;
    @Getter @Setter private Date create_At;
    @Getter @Setter private Date update_At;



    public User() {
    }

    @PrePersist
    protected void onCreate() {
        this.create_At = new Date();
    }

    @PreUpdate
    protected void onUpdate() {
        this.update_At = new Date();
    }

}
