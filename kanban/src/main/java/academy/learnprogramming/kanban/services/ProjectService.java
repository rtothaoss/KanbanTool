package academy.learnprogramming.kanban.services;

import academy.learnprogramming.kanban.domain.Backlog;
import academy.learnprogramming.kanban.domain.Project;

import academy.learnprogramming.kanban.exceptions.ProjectIdException;
import academy.learnprogramming.kanban.repositories.BacklogRepository;
import academy.learnprogramming.kanban.repositories.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectService {


    @Autowired
    private ProjectRepository projectRepository;

    @Autowired
    private BacklogRepository backlogRepository;

    public Project saveOrUpdateProject(Project project){

        String projectId = project.getProjectIdentifier().toUpperCase();

        try{
            project.setProjectIdentifier(projectId);

            if(project.getId() == null) {
                Backlog backlog = new Backlog();
                project.setBacklog(backlog);
                backlog.setProject(project);
                backlog.setProjectIdentifier(projectId);
            }

            if(project.getId() != null) {
                project.setBacklog(backlogRepository.findByProjectIdentifier(projectId));
            }

            return projectRepository.save(project);
        }catch (Exception e){
            throw new ProjectIdException("Project ID '"+project.getProjectIdentifier().toUpperCase()+"' already exists");
        }

    }

    public Project findProjectByIdentifier(String projectId) {

        Project project = projectRepository.findByProjectIdentifier(projectId.toUpperCase());

        if(project == null) {
            throw new ProjectIdException("Project ID '" + projectId + "' does not exist");
        }

        return project;
    }

    public Iterable<Project> findAllProjects() {
        return projectRepository.findAll();
    }

    public void deleteProjectByIdentifier(String projectId) {
        Project project = projectRepository.findByProjectIdentifier(projectId);

        if(project == null) {
            throw new ProjectIdException("Cannot Project with ID '" + projectId + "'. This project does not exist.");
        }

        projectRepository.delete(project);
    }

}
