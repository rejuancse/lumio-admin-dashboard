import { Fragment, useState } from 'react';

const avatarImg = (name) => new URL(`../assets/images/${name}`, import.meta.url).href;

const statusClassMap = {
    'Paid': 'success',
    'Processing': 'pending',
    'Failed': 'failed',
    'Cancelled': 'failed',
};

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
    const [editedRows, setEditedRows] = useState({});
    const [viewRow, setViewRow] = useState(null);
    const [editRow, setEditRow] = useState(null);
    const [editForm, setEditForm] = useState({});

    const selectedFilter = statusFilterOptions.find((opt) => opt.value === statusFilter) || statusFilterOptions[0];

    const handleEditSave = () => {
        setEditedRows((prev) => ({
            ...prev,
            [editRow.id]: {
                ...editRow,
                ...editForm,
                amount: Number(editForm.amount) || 0,
                statusClass: statusClassMap[editForm.status] || editRow.statusClass,
            },
        }));
        setEditRow(null);
    };

    const filterData = orders
        .map((row) => editedRows[row.id] || row)
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
            <tr key={order.id}>
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
                        <a
                            href="#"
                            className="table-btn-action"
                            title="View details"
                            onClick={(e) => {
                                e.preventDefault();
                                setViewRow(order)
                            }}
                            >
                            <i className="bi bi-eye"></i>
                        </a>
                        <a
                            href="#"
                            className="table-btn-action"
                            title="Edit row"
                            onClick={(e) => {
                                e.preventDefault();
                                setEditRow(order);
                                setEditForm({
                                    name: order.name ?? '',
                                    email: order.email ?? '',
                                    product: order.product ?? '',
                                    category: order.category ?? '',
                                    amount: order.amount ?? '',
                                    date: order.date ?? '',
                                    status: order.status ?? 'Processing',
                                });
                            }} >
                            <i className="bi bi-pencil"></i>
                        </a>
                        <a
                            href="#"
                            className="table-btn-action delete"
                            title="Delete row"
                            onClick={() => {
                                if ( window.confirm(`Are you sure you want to delete order "${order.id}"`) ) {
                                    setDeletedIds( (prev) => [...prev, order.id] )
                                }
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

            {/* Quick View Modal */}
            {viewRow && (
                <>
                    <div className="modal-backdrop fade show"></div>
                    <div className="modal fade show d-block" tabIndex="-1" onClick={() => setViewRow(null)}>
                        <div className="modal-dialog modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Quick View &mdash; {viewRow.id}</h5>
                                    <button type="button" className="btn-close" onClick={() => setViewRow(null)}></button>
                                </div>
                                <div className="modal-body">
                                    <div className="text-center mb-3">
                                        <img
                                            src={avatarImg(viewRow.avatar)}
                                            alt={viewRow.name}
                                            className="table-user-avatar"
                                            style={{ width: '64px', height: '64px' }}
                                        />
                                        <h5 className="mt-2 mb-0">{viewRow.name}</h5>
                                        <div className="text-muted">{viewRow.email}</div>
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item d-flex justify-content-between">
                                            <span className="text-muted">Product</span><strong>{viewRow.product}</strong>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between">
                                            <span className="text-muted">Category</span><strong>{viewRow.category}</strong>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between">
                                            <span className="text-muted">Amount</span><strong>${viewRow.amount}</strong>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between">
                                            <span className="text-muted">
                                                Order Date
                                            </span>
                                            <strong>
                                                {
                                                    new Date(viewRow.date + "T00:00:00").toLocaleDateString("en-GB", {
                                                        day: "numeric",
                                                        month: "short",
                                                        year: "numeric",
                                                    })
                                                }
                                            </strong>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            <span className="text-muted">Status</span>
                                            <span className={`badge-table ${viewRow.statusClass}`}>{viewRow.status}</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" onClick={() => setViewRow(null)}>
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}

            {/* Edit Modal */}
            {editRow && (
                <>
                    <div className="modal-backdrop fade show"></div>
                    <div className="modal fade show d-block" tabIndex="-1" onClick={() => setEditRow(null)}>
                        <div className="modal-dialog modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Edit Order &mdash; {editRow.id}</h5>
                                    <button type="button" className="btn-close" onClick={() => setEditRow(null)}></button>
                                </div>
                                <div className="modal-body">
                                    <form onSubmit={(e) => { e.preventDefault(); handleEditSave(); }}>
                                        <div className="mb-2">
                                            <label className="form-label">Customer Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={editForm.name ?? ''}
                                                onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                                            />

                                        </div>
                                        <div className="mb-2">
                                            <label className="form-label">Email</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                value={editForm.email ?? ''}
                                                onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                                            />
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 mb-2">
                                                <label className="form-label">Product</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={editForm.product ?? ''}
                                                    onChange={(e) => setEditForm({ ...editForm, product: e.target.value })}
                                                />
                                            </div>
                                            <div className="col-md-6 mb-2">
                                                <label className="form-label">Category</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={editForm.category ?? ''}
                                                    onChange={(e) => setEditForm({ ...editForm, category: e.target.value })}
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4 mb-2">
                                                <label className="form-label">Amount</label>
                                                <input
                                                    type="number"
                                                    step="0.01"
                                                    className="form-control"
                                                    value={editForm.amount ?? ''}
                                                    onChange={(e) => setEditForm({ ...editForm, amount: e.target.value })}
                                                />
                                            </div>
                                            <div className="col-md-4 mb-2">
                                                <label className="form-label">Date</label>
                                                <input
                                                    type="date"
                                                    className="form-control"
                                                    value={editForm.date ?? ''}
                                                    onChange={(e) => setEditForm({ ...editForm, date: e.target.value })}
                                                />
                                            </div>
                                            <div className="col-md-4 mb-2">
                                                <label className="form-label">Status</label>
                                                <select
                                                    className="form-select"
                                                    value={editForm.status ?? ''}
                                                    onChange={(e) => setEditForm({ ...editForm, status: e.target.value })}
                                                >
                                                    <option value="Paid">Paid</option>
                                                    <option value="Processing">Processing</option>
                                                    <option value="Failed">Failed</option>
                                                    <option value="Cancelled">Cancelled</option>
                                                </select>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" onClick={() => setEditRow(null)}>
                                        Cancel
                                    </button>
                                    <button type="button" className="btn btn-primary" onClick={handleEditSave}>
                                        Save Changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default Table;
