import React from 'react';

// Define the type for template props
interface TemplateLinkProps {
    name: string;
    url: string;
}

// A functional component that renders a single template link
const TemplateLink: React.FC<TemplateLinkProps> = ({ name, url }) => {
    return (
        <li className="template-link">
            <a href={url} target="_blank" rel="noopener noreferrer">
                {name}
            </a>
        </li>
    );
};

// Main component that renders a list of template links
const TemplatesList: React.FC = () => {
    // Example template data
    const templates = [
        { name: 'Barber Shop Template', url: 'https://dfw-software-consulting.github.io/barberShop/' },
        { name: 'Resturant Template', url: 'https://dfw-software-consulting.github.io/burgerSpot/' },
        { name: 'Landscaping Template', url: 'https://example.com/portfolio' },
    ];

    return (
        <div className="templates-list">
            <h2>Available Templates</h2>
            <ul>
                {templates.map((template, index) => (
                    <TemplateLink key={index} name={template.name} url={template.url} />
                ))}
            </ul>
        </div>
    );
};

export default TemplatesList;
