package academy.learnprogramming.kanban.web;

import academy.learnprogramming.kanban.domain.Project;
import academy.learnprogramming.kanban.services.ProjectService;
import academy.learnprogramming.kanban.services.ValidationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.lang.reflect.Field;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/project")
public class ProjectController {

    @Autowired
    private ProjectService projectService;

    @Autowired
    private ValidationService validationService;

    @PostMapping("")
    public ResponseEntity<?> createNewProject(@Valid @RequestBody Project project, BindingResult result) {

        ResponseEntity<?> errorMap = validationService.MapValidationService(result);

        if(errorMap != null) return errorMap;


        Project project1 = projectService.saveOrUpdatePorject(project);
        return new ResponseEntity<Project>(project, HttpStatus.CREATED);
    }
}