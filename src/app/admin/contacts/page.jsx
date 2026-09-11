'use client';

import { useState, useEffect, useCallback } from 'react';
import { 
  Inbox, 
  Search, 
  Trash2, 
  Eye, 
  Phone, 
  Mail, 
  MapPin, 
  Wrench, 
  RefreshCw, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export default function AdminContactsPage() {
  const [contacts, setContacts] = useState([]);
  const [stats, setStats] = useState({ total: 0, new: 0, contacted: 0, resolved: 0 });
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [updatingId, setUpdatingId] = useState(null);

  // Modals state
  const [selectedContact, setSelectedContact] = useState(null);
  const [deleteContact, setDeleteContact] = useState(null);
  const [deleting, setDeleting] = useState(false);

  const fetchContacts = useCallback(async () => {
    setLoading(true);
    try {
      const queryParams = new URLSearchParams({
        page: page.toString(),
        limit: '10',
        search: search.trim(),
        status: statusFilter,
      });

      const res = await fetch(`/api/admin/contacts?${queryParams.toString()}`);
      const json = await res.json();

      if (json.success) {
        setContacts(json.data);
        if (json.stats) setStats(json.stats);
        if (json.pagination) setTotalPages(json.pagination.pages || 1);
      } else {
        console.error('Failed to load contacts:', json.error);
      }
    } catch (err) {
      console.error('Error fetching contacts:', err);
    } finally {
      setLoading(false);
    }
  }, [page, search, statusFilter]);

  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  const handleStatusChange = async (id, newStatus) => {
    setUpdatingId(id);
    try {
      const res = await fetch(`/api/admin/contacts/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });
      const json = await res.json();
      if (json.success) {
        setContacts((prev) =>
          prev.map((c) => (c._id === id ? { ...c, status: newStatus } : c))
        );
        if (selectedContact && selectedContact._id === id) {
          setSelectedContact((prev) => ({ ...prev, status: newStatus }));
        }
        fetchContacts();
      } else {
        alert(json.error || 'Failed to update status');
      }
    } catch (err) {
      console.error('Error updating status:', err);
      alert('Error updating status');
    } finally {
      setUpdatingId(null);
    }
  };

  const handleDelete = async () => {
    if (!deleteContact) return;
    setDeleting(true);
    try {
      const res = await fetch(`/api/admin/contacts/${deleteContact._id}`, {
        method: 'DELETE',
      });
      const json = await res.json();
      if (json.success) {
        setDeleteContact(null);
        if (selectedContact && selectedContact._id === deleteContact._id) {
          setSelectedContact(null);
        }
        fetchContacts();
      } else {
        alert(json.error || 'Failed to delete contact submission');
      }
    } catch (err) {
      console.error('Error deleting contact:', err);
      alert('Error deleting contact submission');
    } finally {
      setDeleting(false);
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'New':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'Contacted':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Resolved':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="space-y-8 animate-fade-in font-satoshi">
      {/* Header & Stats Banner */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Contact Form Submissions</h2>
          <p className="text-gray-500 text-sm mt-1 font-light">
            View and manage user inquiries, service requests, and message submissions.
          </p>
        </div>
        <button
          onClick={fetchContacts}
          className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 font-medium px-4 py-2 rounded-xl text-sm shadow-xs transition cursor-pointer"
        >
          <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          <span>Refresh</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-xs flex items-center justify-between">
          <div>
            <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Total Submissions</span>
            <h3 className="text-2xl font-extrabold text-gray-900 mt-1">{stats.total}</h3>
          </div>
          <div className="w-11 h-11 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center">
            <Inbox className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-xs flex items-center justify-between">
          <div>
            <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider">New / Pending</span>
            <h3 className="text-2xl font-extrabold text-amber-600 mt-1">{stats.new}</h3>
          </div>
          <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-100">
            <AlertCircle className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-xs flex items-center justify-between">
          <div>
            <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider">In Progress</span>
            <h3 className="text-2xl font-extrabold text-blue-600 mt-1">{stats.contacted}</h3>
          </div>
          <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
            <Clock className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-xs flex items-center justify-between">
          <div>
            <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Resolved</span>
            <h3 className="text-2xl font-extrabold text-emerald-600 mt-1">{stats.resolved}</h3>
          </div>
          <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100">
            <CheckCircle className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Status Filter Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
          {['All', 'New', 'Contacted', 'Resolved'].map((st) => (
            <button
              key={st}
              onClick={() => {
                setStatusFilter(st);
                setPage(1);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer whitespace-nowrap ${
                statusFilter === st
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {st === 'All' ? 'All Inquiries' : st}
            </button>
          ))}
        </div>

        {/* Search Field */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search name, email, phone..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 transition"
          />
          {search && (
            <button
              onClick={() => {
                setSearch('');
                setPage(1);
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Submissions Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-700">
            <thead className="bg-gray-50/80 border-b border-gray-100 uppercase text-[11px] font-bold text-gray-500 tracking-wider">
              <tr>
                <th scope="col" className="px-6 py-4">Date & Time</th>
                <th scope="col" className="px-6 py-4">Name & Contact</th>
                <th scope="col" className="px-6 py-4">Service & Location</th>
                <th scope="col" className="px-6 py-4">Message Preview</th>
                <th scope="col" className="px-6 py-4">Status</th>
                <th scope="col" className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {loading ? (
                <tr>
                  <td colSpan="6" className="px-6 py-12 text-center text-gray-400">
                    <div className="flex flex-col items-center justify-center gap-2">
                      <div className="w-8 h-8 border-3 border-slate-900 border-t-transparent rounded-full animate-spin" />
                      <span>Loading contact submissions...</span>
                    </div>
                  </td>
                </tr>
              ) : contacts.length === 0 ? (
                <tr>
                  <td colSpan="6" className="px-6 py-12 text-center text-gray-400">
                    <div className="flex flex-col items-center justify-center gap-2">
                      <Inbox className="w-10 h-10 text-gray-300" />
                      <p className="font-medium text-gray-600">No contact submissions found</p>
                      <p className="text-xs text-gray-400">Try adjusting your search or status filter</p>
                    </div>
                  </td>
                </tr>
              ) : (
                contacts.map((c) => (
                  <tr key={c._id} className="hover:bg-slate-50/60 transition-colors">
                    {/* Date */}
                    <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500 font-light">
                      <div>{new Date(c.createdAt).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}</div>
                      <div className="text-[11px] text-gray-400 mt-0.5">{new Date(c.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                    </td>

                    {/* Contact details */}
                    <td className="px-6 py-4">
                      <div className="font-bold text-gray-900">{c.name}</div>
                      <div className="flex items-center gap-3 text-xs text-gray-500 mt-1">
                        <a href={`mailto:${c.email}`} className="flex items-center gap-1 hover:text-[#C10510] transition-colors" title="Send email">
                          <Mail className="w-3.5 h-3.5 text-gray-400" />
                          <span>{c.email}</span>
                        </a>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-gray-500 mt-0.5">
                        <a href={`tel:${c.contact}`} className="flex items-center gap-1 hover:text-[#C10510] transition-colors" title="Call number">
                          <Phone className="w-3.5 h-3.5 text-gray-400" />
                          <span>{c.contact}</span>
                        </a>
                      </div>
                    </td>

                    {/* Service & Location */}
                    <td className="px-6 py-4">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 text-slate-800 text-xs font-medium">
                        <Wrench className="w-3 h-3 text-slate-500" />
                        <span>{c.service || 'General Inquiry'}</span>
                      </div>
                      {c.location && (
                        <div className="flex items-center gap-1 text-xs text-gray-500 mt-1.5">
                          <MapPin className="w-3.5 h-3.5 text-gray-400" />
                          <span>{c.location}</span>
                        </div>
                      )}
                    </td>

                    {/* Message Preview */}
                    <td className="px-6 py-4 max-w-xs">
                      <p className="text-xs text-gray-600 truncate font-light">
                        {c.message ? c.message : <span className="italic text-gray-400">No message body</span>}
                      </p>
                      {c.message && (
                        <button
                          onClick={() => setSelectedContact(c)}
                          className="text-[11px] font-semibold text-[#C10510] hover:underline mt-1 block cursor-pointer"
                        >
                          Read full message
                        </button>
                      )}
                    </td>

                    {/* Status Dropdown */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <select
                        value={c.status}
                        disabled={updatingId === c._id}
                        onChange={(e) => handleStatusChange(c._id, e.target.value)}
                        className={`text-xs font-bold px-3 py-1.5 rounded-full border cursor-pointer outline-none transition ${getStatusBadge(
                          c.status
                        )}`}
                      >
                        <option value="New">New</option>
                        <option value="Contacted">Contacted</option>
                        <option value="Resolved">Resolved</option>
                      </select>
                    </td>

                    {/* Actions */}
                    <td className="px-6 py-4 whitespace-nowrap text-right space-x-2">
                      <button
                        onClick={() => setSelectedContact(c)}
                        className="p-2 text-gray-500 hover:text-slate-900 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
                        title="View Details"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => setDeleteContact(c)}
                        className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                        title="Delete Submission"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Footer */}
        {totalPages > 1 && (
          <div className="px-6 py-4 bg-gray-50/50 border-t border-gray-100 flex items-center justify-between text-xs text-gray-600">
            <span>
              Page {page} of {totalPages}
            </span>
            <div className="flex items-center gap-2">
              <button
                disabled={page === 1}
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                className="p-2 rounded-lg bg-white border border-gray-200 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50 transition"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                disabled={page === totalPages}
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                className="p-2 rounded-lg bg-white border border-gray-200 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50 transition"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Message View Modal */}
      {selectedContact && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 md:p-8 shadow-2xl space-y-6 relative animate-scale-in">
            <button
              onClick={() => setSelectedContact(null)}
              className="absolute top-6 right-6 p-2 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
              <div className="w-12 h-12 rounded-2xl bg-[#C10510]/10 text-[#C10510] flex items-center justify-center font-bold text-lg">
                {selectedContact.name.charAt(0).toUpperCase()}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">{selectedContact.name}</h3>
                <p className="text-xs text-gray-400 font-light">
                  Submitted on {new Date(selectedContact.createdAt).toLocaleString()}
                </p>
              </div>
            </div>

            <div className="space-y-4 text-sm">
              <div className="grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-2xl">
                <div>
                  <span className="text-xs font-semibold text-gray-400 block uppercase tracking-wider">Email</span>
                  <a href={`mailto:${selectedContact.email}`} className="text-slate-900 font-medium hover:text-[#C10510] break-all">
                    {selectedContact.email}
                  </a>
                </div>
                <div>
                  <span className="text-xs font-semibold text-gray-400 block uppercase tracking-wider">Phone</span>
                  <a href={`tel:${selectedContact.contact}`} className="text-slate-900 font-medium hover:text-[#C10510]">
                    {selectedContact.contact}
                  </a>
                </div>
                <div>
                  <span className="text-xs font-semibold text-gray-400 block uppercase tracking-wider">Interested Service</span>
                  <span className="text-slate-900 font-medium">{selectedContact.service || 'General Inquiry'}</span>
                </div>
                <div>
                  <span className="text-xs font-semibold text-gray-400 block uppercase tracking-wider">Location</span>
                  <span className="text-slate-900 font-medium">{selectedContact.location || 'Not specified'}</span>
                </div>
              </div>

              <div>
                <span className="text-xs font-semibold text-gray-400 block uppercase tracking-wider mb-2">Message Body</span>
                <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl text-gray-800 text-sm leading-relaxed whitespace-pre-wrap font-light min-h-[100px]">
                  {selectedContact.message || <span className="italic text-gray-400">No message included in this submission.</span>}
                </div>
              </div>

              <div>
                <span className="text-xs font-semibold text-gray-400 block uppercase tracking-wider mb-2">Update Status</span>
                <div className="flex gap-2">
                  {['New', 'Contacted', 'Resolved'].map((st) => (
                    <button
                      key={st}
                      onClick={() => handleStatusChange(selectedContact._id, st)}
                      className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold border transition cursor-pointer ${
                        selectedContact.status === st
                          ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                          : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-gray-100 flex items-center justify-between gap-3">
              <a
                href={`mailto:${selectedContact.email}?subject=Re: Reliant Elevators Inquiry`}
                className="flex-1 bg-[#C10510] hover:bg-red-700 text-white font-semibold py-2.5 px-4 rounded-xl text-center text-sm transition shadow-sm"
              >
                Reply via Email
              </a>
              <button
                onClick={() => setSelectedContact(null)}
                className="px-5 py-2.5 border border-gray-200 text-gray-700 rounded-xl text-sm hover:bg-gray-50 font-medium transition cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteContact && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-sm w-full p-6 shadow-2xl space-y-4 text-center">
            <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center mx-auto">
              <Trash2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">Delete Contact Submission?</h3>
              <p className="text-xs text-gray-500 mt-1 font-light">
                Are you sure you want to delete inquiry from <span className="font-semibold text-gray-800">{deleteContact.name}</span>? This action cannot be undone.
              </p>
            </div>
            <div className="flex gap-3 pt-2">
              <button
                onClick={() => setDeleteContact(null)}
                className="flex-1 py-2.5 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 transition cursor-pointer"
              >
                Cancel
              </button>
              <button
                disabled={deleting}
                onClick={handleDelete}
                className="flex-1 py-2.5 bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white rounded-xl text-sm font-semibold transition cursor-pointer shadow-sm"
              >
                {deleting ? 'Deleting...' : 'Delete'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
