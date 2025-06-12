import React, { useState, useEffect } from 'react';

const internshipData = [
    {
        id: 1,
        title: "UI/UX Design Intern",
        category: "ui-ux",
        type: "Work from Home",
        duration: "3 months",
        stipend: "₹10,000/month",
        description: "Join Suvidha Foundation as a UI/UX Design intern and work on exciting projects",
        skills: ["Figma", "Adobe XD", "User Research"]
    },
    {
        id: 2,
        title: "Full Stack Developer",
        category: "full-stack",
        type: "Full-time Office",
        duration: "6 months",
        stipend: "₹15,000/month",
        description: "Work on end-to-end web applications using MERN stack",
        skills: ["React", "Node.js", "MongoDB"]
    },
    {
        id: 3,
        title: "Software Engineer Intern",
        category: "software",
        type: "Hybrid",
        duration: "6 months",
        stipend: "₹20,000/month",
        description: "Join our core engineering team and work on scalable solutions",
        skills: ["Java", "Python", "Data Structures"]
    },
    {
        id: 4,
        title: "Data Analytics Intern",
        category: "data",
        type: "Work from Home",
        duration: "4 months",
        stipend: "₹12,000/month",
        description: "Work with big data and create meaningful insights",
        skills: ["Python", "SQL", "Tableau"]
    },
    {
        id: 5,
        title: "Digital Marketing Intern",
        category: "marketing",
        type: "Part-time",
        duration: "3 months",
        stipend: "₹8,000/month",
        description: "Drive our social media presence and digital marketing campaigns",
        skills: ["Social Media", "Content Writing", "SEO"]
    },
    {
        id: 6,
        title: "Machine Learning Engineer",
        category: "ai-ml",
        type: "Full-time Office",
        duration: "6 months",
        stipend: "₹25,000/month",
        description: "Work on cutting-edge ML models and AI applications",
        skills: ["Python", "TensorFlow", "Deep Learning"]
    },
    {
        id: 7,
        title: "Content Writer",
        category: "content",
        type: "Work from Home",
        duration: "3 months",
        stipend: "₹7,000/month",
        description: "Create engaging content for our blog and social media",
        skills: ["Content Writing", "SEO", "Social Media"]
    },
    {
        id: 8,
        title: "Mobile App Developer",
        category: "mobile",
        type: "Hybrid",
        duration: "6 months",
        stipend: "₹18,000/month",
        description: "Develop mobile applications for iOS and Android platforms",
        skills: ["React Native", "Flutter", "Mobile Development"]
    }
];

const InternshipCard = ({ internship }) => (
    <div className="card mb-3">
        <div className="card-body">
            <h5 className="card-title">{internship.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
                Duration: {internship.duration} | Type: {internship.type}
            </h6>
            <p className="card-text">{internship.description}</p>
            <div className="mb-2">
                <strong>Stipend:</strong> {internship.stipend}
            </div>
            <div className="skills-container">
                {internship.skills.map((skill, index) => (
                    <span key={index} className="badge bg-light text-dark me-2">{skill}</span>
                ))}
            </div>
            <button className="btn btn-primary mt-3">Apply Now</button>
        </div>
    </div>
);

export default function InternshipPage() {
    const [selectedFilter, setSelectedFilter] = useState('all');
    const [selectedType, setSelectedType] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState('default');
    const [loading, setLoading] = useState(true);

    const filters = [
        { id: 'all', label: 'All Internships' },
        { id: 'ui-ux', label: 'UI/UX Design' },
        { id: 'full-stack', label: 'Full Stack Dev' },
        { id: 'software', label: 'Software Engineer' },
        { id: 'data', label: 'Data Analytics' },
        { id: 'marketing', label: 'Digital Marketing' },
        { id: 'ai-ml', label: 'AI/ML' },
        { id: 'content', label: 'Content Writing' },
        { id: 'mobile', label: 'Mobile Development' }
    ];

    const internshipTypes = [
        { id: 'all', label: 'All Types' },
        { id: 'Work from Home', label: 'Work from Home' },
        { id: 'Full-time Office', label: 'Full-time Office' },
        { id: 'Hybrid', label: 'Hybrid' },
        { id: 'Part-time', label: 'Part-time' }
    ];

    const sortOptions = [
        { value: 'default', label: 'Default' },
        { value: 'stipend-high', label: 'Stipend: High to Low' },
        { value: 'stipend-low', label: 'Stipend: Low to High' },
        { value: 'duration', label: 'Duration' }
    ];

    useEffect(() => {
        setTimeout(() => setLoading(false), 1000);
    }, []);

    const sortInternships = (internships) => {
        switch (sortBy) {
            case 'stipend-high':
                return [...internships].sort((a, b) => 
                    parseInt(b.stipend.replace(/[^0-9]/g, '')) - 
                    parseInt(a.stipend.replace(/[^0-9]/g, '')));
            case 'stipend-low':
                return [...internships].sort((a, b) => 
                    parseInt(a.stipend.replace(/[^0-9]/g, '')) - 
                    parseInt(b.stipend.replace(/[^0-9]/g, '')));
            case 'duration':
                return [...internships].sort((a, b) => 
                    parseInt(a.duration) - parseInt(b.duration));
            default:
                return internships;
        }
    };

    const filteredInternships = internshipData
        .filter(intern => selectedFilter === 'all' || intern.category === selectedFilter)
        .filter(intern => selectedType === 'all' || intern.type === selectedType)
        .filter(intern => 
            searchQuery === '' || 
            intern.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            intern.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            intern.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))
        );

    const sortedInternships = sortInternships(filteredInternships);

    if (loading) {
        return (
            <div className="container mt-5 text-center">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <p className="mt-2">Loading internships...</p>
            </div>
        );
    }

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Suvidha Foundation Internships</h1>
            
            <div className="row mb-4">
                <div className="col-md-4">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search internships..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <div className="col-md-3">
                    <select 
                        className="form-select"
                        value={selectedFilter}
                        onChange={(e) => setSelectedFilter(e.target.value)}
                    >
                        {filters.map(filter => (
                            <option key={filter.id} value={filter.id}>
                                {filter.label}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="col-md-3">
                    <select 
                        className="form-select"
                        value={selectedType}
                        onChange={(e) => setSelectedType(e.target.value)}
                    >
                        {internshipTypes.map(type => (
                            <option key={type.id} value={type.id}>
                                {type.label}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="col-md-2">
                    <select 
                        className="form-select"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                    >
                        {sortOptions.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {sortedInternships.length === 0 ? (
                <div className="text-center mt-5">
                    <h3>No internships found</h3>
                    <p>Try adjusting your search or filter criteria</p>
                </div>
            ) : (
                <div className="row">
                    {sortedInternships.map(internship => (
                        <div key={internship.id} className="col-md-6 col-lg-4 mb-4">
                            <InternshipCard internship={internship} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}