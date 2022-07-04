import React, {useState} from 'react';
import PersonInfo from '@components/PersonInfo.jsx';
import Section from '@components/Section.jsx';

function TemplateA() {
    return (
        <form>
            <div>
                <PersonInfo />
                <Section />
            </div>
        </form>
    );
};

export default TemplateA;