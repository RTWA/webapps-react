import React, { useState } from 'react';
import PropTypes from "prop-types";
import Input from './Input';

const DataSuggest = ({ data, select, placeholder, noMatchesText, limit, labelKey, valueKey, ...props }) => {
    const [active, setActive] = useState(0);
    const [filteredData, setFilteredData] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const [dataInput, setDataInput] = useState('');

    const onChange = e => {
        const dataInput = e.currentTarget.value;

        const _filteredData = data.filter(
            data => data[labelKey].toLowerCase().indexOf(dataInput.toLowerCase()) > -1
        );

        setActive(0);
        setFilteredData(_filteredData);
        setShowResults(true);
        setDataInput(e.currentTarget.value);
    };

    const onClick = e => {
        e.stopPropagation();

        setDataInput(filteredData[e.currentTarget.dataset.key][labelKey]);
        select(filteredData[e.currentTarget.dataset.key]);

        setActive(0);
        setFilteredData([]);
        setShowResults(false);
    };

    const onKeyDown = e => {
        if (e.keyCode === 13) {
            setDataInput(filteredData[active][labelKey]);
            select(filteredData[active]);

            setShowResults(false);
            setActive(0);
        }
        else if (e.keyCode === 38) {
            if (active === 0)
                return;

            setActive(active - 1);
        }
        else if (e.keyCode === 40) {
            if (active + 1 === filteredData.length)
                return;
            setActive(active + 1);
        }
    };

    let dataListComponent;

    if (showResults && dataInput) {
        if (filteredData.length) {
            let count = 1;
            dataListComponent = (
                <ul className="absolute inset-x-0 bg-white dark:bg-gray-700 rounded-b border border-gray-200 dark:border-gray-600 text-gray-900 text-sm font-medium dark:text-white cursor-pointer">
                    {
                        filteredData.map((data, index) => {
                            if (limit === 0 || count <= limit) {
                                let className = "flex flex-row gap-x-2 px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-900";

                                if (index === active) {
                                    className = "flex flex-row gap-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-900";
                                }

                                count = count + 1;

                                return <li className={className} key={data[valueKey]} data-key={index} onClick={onClick}>{data[labelKey]}</li>
                            }
                        })
                    }
                </ul>
            );
        } else {
            dataListComponent = (
                <ul className="absolute inset-x-0 bg-white dark:bg-gray-700 rounded-b border border-gray-200 dark:border-gray-600 text-gray-900 text-sm font-medium dark:text-white cursor-pointer">
                    <li className="px-4 py-2 text-center"><em>{noMatchesText}</em></li>
                </ul>
            );
        }
    }

    return (
        <div className="relative mb-6">
            <Input type="text" onChange={onChange} onKeyDown={onKeyDown} value={dataInput}
                placeholder={placeholder} autoComplete="no" wrapperClassName="" {...props} />
            {dataListComponent}
        </div>
    );
}

DataSuggest.propTypes = {
    data: PropTypes.instanceOf(Array),
    select: PropTypes.instanceOf(Function),
    valueKey: PropTypes.string,
    labelKey: PropTypes.string,
    placeholder: PropTypes.string,
    noMatchesText: PropTypes.string,
    limit: PropTypes.number,
};

DataSuggest.defaultProps = {
    data: [],
    select: function () { return true; },
    valueKey: 'value',
    labelKey: 'label',
    placeholder: 'Start typing to search...',
    noMatchesText: 'No matching results found!',
    limit: 0
};

export default DataSuggest;