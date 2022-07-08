import * as React from 'react';
import '../styles/groups.scss'
import BlockInfo from './BlockInfo.js';
import ProgressBar from '../components/progressBar/ProgressBar.js'


const StartedGroups = ({
                           startedGroups,
                           maxStudents,
                           history,
                           name
}) => {
    return (
        <section className={'groups_wrapper'}>
            <h1>Learning groups for: {name ? `${name}` : 'All'}</h1>
            <ul className={'groups_list'}>
                {startedGroups.map((group, index) => (
                    <li
                        className={'groups_item'}
                        key={`${group.totalLessons}${index}`}
                    >
                        <h1>Learning Group: {index + 1}</h1>
                        <div className={'groups_item_info'}>
                            <BlockInfo
                                text1={group.teacherName}
                                text2={'teacher'}
                            />
                            <BlockInfo
                                text1={`${group.passedLessons.length}/${group.totalLessons}`}
                                text2={'passed lesson'}
                            />
                            <BlockInfo
                                text1={`${group.numberStudentsInGroup}/${maxStudents}`}
                                text2={'students'}
                            />
                            <BlockInfo
                                text1={history}
                                text2={'group started'}
                            />
                        </div>
                        <ProgressBar
                            passedLessons={group.passedLessons.length}
                            itemsCount={group.totalLessons}
                        />
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default StartedGroups;