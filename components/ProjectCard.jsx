"use client";

import React from 'react';
import PropTypes from 'prop-types';

const ProjectCard = ({ title, description, language, stars, link }) => {
  console.log('ProjectCard Props (Client):', { title, description, language, stars, link });
  console.log('ProjectCard Props (Server):', { title, description, language, stars, link });
  return (
    <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold hover:text-blue-600">
            <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              {title}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </h3>
          <p className="text-gray-600 mt-1">{description}</p>
        </div>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <div className="flex items-center gap-1">
          <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
          <span className="text-sm text-gray-600">{language}</span>
        </div>
        <div className="flex items-center gap-1">
          <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="text-sm text-gray-600">{stars}</span>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
  link: PropTypes.string.isRequired,
};

export default ProjectCard;
