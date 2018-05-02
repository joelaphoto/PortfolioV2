import { Injectable, Inject } from '@angular/core';
import { Project } from '../models/project.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ProjectService {
    projects: FirebaseListObservable<any[]>;

    constructor(private database: AngularFireDatabase) {
        this.projects = database.list('projects')
    }

    getProjects() {
        return this.projects;
    }

    addProject(newProject: Project) {
        this.projects.push(newProject);
    }

    getProjectById(projectId: string) {
        return this.database.object('projects/' + projectId)
    }

    updateProject(localUpdatedProject) {
        const projectEntryInFirebase = this.getProjectById(localUpdatedProject.$key);
        projectEntryInFirebase.update({name: localUpdatedProject.name,
                                       date: localUpdatedProject.date,
                                       shortDesc: localUpdatedProject.shortDesc,
                                       longDesc: localUpdatedProject.longDesc,
                                       link: localUpdatedProject.link,
                                       imgUrl: localUpdatedProject.imgUrl
        })
    }

    deleteProject(localProject) {
        const projectEntryInFirebase = this.getProjectById(localProject.$key);
        projectEntryInFirebase.remove();
    }
}