import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

const CreateElement = ({ items, components = {} }) => {
    const renderItem = (item, i) => {
        const { _tag, _children, ...rest } = item
        const Tag = components[_tag] || _tag
        const children = _children ? _children.map((child, i) => {
            return typeof child === 'object' ? renderItem(child, i) : child
        }) : ''
        return <Tag key={Tag + i} {...rest}>{children}</Tag>
    }

    const generatedItems = useMemo(() => {
        return items && items.map((item, i) => renderItem(item, i))
    }, [JSON.stringify(items)])

    return (
        <React.Fragment>
            {generatedItems}
        </React.Fragment>
    )
}

    // items: PropTypes.oneOfType[PropTypes.array, PropTypes.object],
CreateElement.propTypes = {
    components: PropTypes.object
};

export default CreateElement;
