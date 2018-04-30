export class Project {
    liveLink: string;
    hasLiveLink: boolean;
    constructor(public name: string, public date: string, public shortDesc: string, public longDesc: string, public link: string, imgUrl: string) {}
}