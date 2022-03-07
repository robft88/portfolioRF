export interface Information {
    $key?: string;
    title?: string;
    about:    About;
    contact:  Contact;
    home:     Home;
    nav:      Nav[];
    projects: Projects;
}

export interface About {
    $key?: string;
    description: string;
    tech:        Tech[];
    title:            string;
    titleDescription: string;
    titleTech:        string;
    titleTools:       string;
    tools:       string[];
    what:        What[];
}

export interface Tech {
    icon: string;
    name: string;
}

export interface What {
    description: string;
    icon:        string;
    title:       string;
}

export interface Contact {
    $key?: string;
    description: string;
    title:       string;
}

export interface Home {
    $key?: string;
    description: string;
    name:        string;
    subtitle:    string[];
}

export interface Nav {
    $key?: string;
    id:    string;
    title: string;
}

export interface Projects {
    $key?: string;
    projects: Project[];
    title:    string;
}

export interface Project {
    description: string;
    github:      string;
    id:          number;
    link:        string;
    name:        string;
    image:       string;
    tools:       string[];
}


export interface Welcome {
    about:    About;
    contact:  Contact;
    home:     Home;
    nav:      Nav[];
    projects: Projects;
}
