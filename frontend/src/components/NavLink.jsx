import React from 'react';
import { Link } from 'react-router'

export default class NavLink extends React.Component {
    render() {
        const is_active = this.context.router.isActive(this.props.to, true);
        return (
            <li className={[is_active ? "active" : ''].join(' ')}>
                <Link {...this.props}/>
            </li>
        );
    }
}

NavLink.contextTypes = {
    router: React.PropTypes.object
};
