import * as React from 'react';
import { connect } from 'react-redux';
import {removeAvailableSchool} from "../redux/actions/index.js";

const SidebarSchool = ({availableSchool, removeSchool, setDataSchool}) => {
    return (
        <article className={'availableSchool_wrapper'}>
            <ul className={'school_list'}>
                {availableSchool.map((school, index) => (
                    <li
                        className={'school_item'}
                        key={`${school.maxStudentsInGroup}${index}`}
                        onClick={() => setDataSchool({...school})}
                    >
                        {school.name}
                    </li>
                ))}
            </ul>
        </article>
    );
};

const mapStateToProps = (state) => ({
    availableSchool: state.availableSchool,
});

const mapDispatchToProps = (dispatch) => ({
    removeSchool: (index) => dispatch(removeAvailableSchool(index))
})

export default connect(mapStateToProps, mapDispatchToProps)(SidebarSchool);
