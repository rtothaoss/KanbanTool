package academy.learnprogramming.kanban.services;

import academy.learnprogramming.kanban.domain.Project;
import academy.learnprogramming.kanban.repositories.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectService {

    @Autowired
    private ProjectRepository projectRepository;


    public Project saveOrUpdatePorject(Project project) {
        return projectRepository.save(project);
    }

}
