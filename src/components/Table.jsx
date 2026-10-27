import { Fragment, useState } from 'react';

const avatarImg = (name) => new URL(`../assets/images/${name}`, import.meta.url).href;

const statusFilterOptions = [
    { label: 'All Statuses', value: 'all' },
    { label: 'Paid / Success', value: 'Paid' },
    { label: 'Processing', value: 'Processing' },
    { label: 'Cancelled / Failed', value: 'Cancelled|Failed' },
];

function Table( {config, orders} ) {
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');
    const [deletedIds, setDeletedIds] = useState([]);

    const selectedFilter = statusFilterOptions.find((opt) => opt.value === statusFilter) || statusFilterOptions[0];

    const filterData = orders
        .filter( (row) => !deletedIds.includes(row.id) )
        .filter( (value) => {
            // Status filter
            if (statusFilter !== 'all') {
                const allowedStatuses = statusFilter.split('|');
                if (!allowedStatuses.includes(value.status)) return false;
            }

            // Search
            const term = searchTerm.trim().toLowerCase();
            if( !term ) return true;
            return (
                String(value.id).toLowerCase().includes(term) ||
                value.name.toLowerCase().includes(term) ||
                value.email.toLowerCase().includes(term) ||
                value.product.toLowerCase().includes(term) ||
                value.category.toLowerCase().includes(term) ||
                String(value.amount).toLowerCase().includes(term) ||
                value.date.toLowerCase().includes(term) ||
                value.status.toLowerCase().includes(term)
            )
        });

    const renderHeaders = config.map( (column) => {
        return <th key={column.label}>{column.label}</th>
    });

    const renderedRows = filterData.map( (order) => {
        return (
            <tr>
                <td className="table-order-id">{order.id}</td>
                <td>
                    <div className="table-user-cell">
                        <img
                            src={avatarImg(order.avatar)}
                            alt={order.name}
                            className="table-user-avatar" />
                        <div>
                            <div className="table-user-name">{order.name}</div>
                            <div className="table-user-sub">{order.email}</div>
                        </div>
                    </div>
                </td>
                <td className="table-product-name">{order.product}</td>
                <td>{order.category}</td>
                <td className="table-amount">${order.amount}</td>
                <td>
                    {
                        new Date(order.date + "T00:00:00").toLocaleDateString("en-GB", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                        })
                    }
                </td>
                <td>
                    <span className={`badge-table ${order.statusClass}`}>
                        {order.status}
                    </span>
                </td>
                <td>
                    <div className="d-flex justify-content-center gap-1">
                        {/* <a href="#" className="table-btn-action" title="View details">
                            <i className="bi bi-eye"></i>
                        </a>
                        <a href="#" className="table-btn-action" title="Edit row">
                            <i className="bi bi-pencil"></i>
                        </a> */}
                        <a
                            href="#"
                            className="table-btn-action delete"
                            title="Delete row"
                            onClick={() => {
                                setDeletedIds( (prev) => [...prev, order.id] )
                            }}
                            >
                            <i className="bi bi-trash"></i>
                        </a>
                    </div>
                </td>
            </tr>
        )
    });

    return (
        <div className="table-card-custom">
            <div className="table-header-control">
                <div className="table-search-box">
                    <i className="bi bi-search table-search-icon"></i>
                    <input
                        type="text"
                        className="table-search-input"
                        placeholder="Search orders or products..."
                        value={searchTerm}
                        onChange={ (e) => setSearchTerm(e.target.value) } />
                </div>

                <div className="table-filter-group">
                    <div className="dropdown">
                        <button className="btn-table-action dropdown-toggle" type="button" id="dropdownFilterStatus" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="bi bi-funnel"></i>
                            {selectedFilter.label}
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownFilterStatus">
                            {statusFilterOptions.map((opt) => (
                                <li key={opt.value}>
                                    <a
                                        className={`dropdown-item ${statusFilter === opt.value ? 'active' : ''}`}
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setStatusFilter(opt.value);
                                        }}
                                    >
                                        {opt.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="table-responsive">
                <table className="table-custom">
                    <thead><tr>{renderHeaders}</tr></thead>
                    <tbody>
                        {renderedRows.length > 0 ? (
                            renderedRows
                        ) : (
                            <tr>
                                <td colSpan={config.length + 1} className="text-center text-muted py-4">
                                    No results found{searchTerm ? ` for "${searchTerm}"` : ''}{statusFilter !== 'all' ? ` in ${selectedFilter.label}` : ''}
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table;
