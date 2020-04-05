package academy.learnprogramming.kanban.services;

import academy.learnprogramming.kanban.domain.Backlog;
import academy.learnprogramming.kanban.domain.ProjectTask;
import academy.learnprogramming.kanban.repositories.BacklogRepository;
import academy.learnprogramming.kanban.repositories.ProjectTaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectTaskService {

    @Autowired
    private BacklogRepository backlogRepository;

    @Autowired
    private ProjectTaskRepository projectTaskRepository;

    public ProjectTask addProjectTask(String projectIdentifier, ProjectTask projectTask){

        Backlog backlog = backlogRepository.findByProjectIdentifier(projectIdentifier);

        projectTask.setBacklog(backlog);

        Integer BacklogSequence = backlog.getPTSequence();

        BacklogSequence++;

        backlog.setPTSequence(BacklogSequence);

        projectTask.setProjectSequence(projectIdentifier + "-" + BacklogSequence);
        projectTask.setProjectIdentifier(projectIdentifier);


        if(projectTask.getStatus() == "" || projectTask.getStatus() == null) {
            projectTask.setStatus("TO_DO");
        }

        if(projectTask.getPriority() == null) {
            projectTask.setPriority(3);
        }

        return projectTaskRepository.save(projectTask);

    }

    public Iterable<ProjectTask>findBacklogById(String id) {
        return projectTaskRepository.findByProjectIdentifierOrderByPriority(id);
    }
}
