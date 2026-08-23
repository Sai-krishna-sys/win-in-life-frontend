import { useEffect, useMemo, useState } from "react";
import {
  CalendarDays,
  CheckCircle,
  Clock,
  Filter,
  LogOut,
  RefreshCw,
  Search,
  Trash2,
  XCircle,
} from "lucide-react";

const API_URL = "https://win-in-life-backend.onrender.com/api";
const AdminDashboard = () => {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState("");

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [serviceFilter, setServiceFilter] = useState("all");

  const admin = JSON.parse(localStorage.getItem("admin") || "null");
  const token = localStorage.getItem("adminToken");

  // ==========================================
  // ALL SERVICES
  // ==========================================

  const allServices = [
    {
      value: "speech-therapy",
      label: "Speech Therapy",
    },
    {
      value: "occupational-therapy",
      label: "Occupational Therapy",
    },
    {
      value: "behavioral-therapy",
      label: "Behavioral Therapy",
    },
    {
      value: "special-education",
      label: "Special Education",
    },
    {
      value: "assessment",
      label: "General Assessment",
    },
  ];

  // ==========================================
  // FETCH RESERVATIONS
  // ==========================================

  const fetchReservations = async () => {
    try {
      setError("");

      const response = await fetch(`${API_URL}/reservations`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to fetch reservations."
        );
      }

      setReservations(data.reservations || []);
    } catch (error) {
      console.error(error);
      setError(error.message);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  // ==========================================
  // CHECK ADMIN LOGIN
  // ==========================================

  useEffect(() => {
    if (!token || !admin) {
      window.location.href = "/admin/login";
      return;
    }

    fetchReservations();
  }, []);

  // ==========================================
  // REFRESH
  // ==========================================

  const refreshReservations = () => {
    setRefreshing(true);
    fetchReservations();
  };

  // ==========================================
  // UPDATE STATUS
  // ==========================================

  const updateStatus = async (id, status) => {
    try {
      const response = await fetch(
        `${API_URL}/reservations/${id}/status`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ status }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to update status."
        );
      }

      setReservations((current) =>
        current.map((reservation) =>
          reservation._id === id
            ? data.reservation
            : reservation
        )
      );
    } catch (error) {
      alert(error.message);
    }
  };

  // ==========================================
  // DELETE RESERVATION
  // ==========================================

  const deleteReservation = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this assessment request?"
    );

    if (!confirmed) return;

    try {
      const response = await fetch(
        `${API_URL}/reservations/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to delete request."
        );
      }

      setReservations((current) =>
        current.filter(
          (reservation) => reservation._id !== id
        )
      );
    } catch (error) {
      alert(error.message);
    }
  };

  // ==========================================
  // LOGOUT
  // ==========================================

  const logout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("admin");

    window.location.href = "/admin/login";
  };

  // ==========================================
  // STATUS CLASS
  // ==========================================

  const getStatusClass = (status) => {
    return `status-badge status-${status}`;
  };

  // ==========================================
  // FILTER REQUESTS
  // ==========================================

  const filteredReservations = useMemo(() => {
    const search = searchTerm.toLowerCase().trim();

    return reservations.filter((reservation) => {
      const matchesSearch =
        !search ||
        reservation.parentName
          ?.toLowerCase()
          .includes(search) ||
        reservation.childName
          ?.toLowerCase()
          .includes(search) ||
        reservation.phone
          ?.toLowerCase()
          .includes(search) ||
        reservation.email
          ?.toLowerCase()
          .includes(search);

      const matchesStatus =
        statusFilter === "all" ||
        reservation.status === statusFilter;

      const matchesService =
        serviceFilter === "all" ||
        reservation.service === serviceFilter;

      return (
        matchesSearch &&
        matchesStatus &&
        matchesService
      );
    });
  }, [
    reservations,
    searchTerm,
    statusFilter,
    serviceFilter,
  ]);

  // ==========================================
  // CLEAR FILTERS
  // ==========================================

  const clearFilters = () => {
    setSearchTerm("");
    setStatusFilter("all");
    setServiceFilter("all");
  };

  // ==========================================
  // STATISTICS
  // ==========================================

  const pendingCount = reservations.filter(
    (reservation) => reservation.status === "pending"
  ).length;

  const confirmedCount = reservations.filter(
    (reservation) => reservation.status === "confirmed"
  ).length;

  const completedCount = reservations.filter(
    (reservation) => reservation.status === "completed"
  ).length;

  const cancelledCount = reservations.filter(
    (reservation) => reservation.status === "cancelled"
  ).length;

  // ==========================================
  // LOADING
  // ==========================================

  if (loading) {
    return (
      <div className="admin-dashboard-loading">
        <div className="admin-loading-spinner"></div>

        <p>
          Loading assessment requests...
        </p>
      </div>
    );
  }

  // ==========================================
  // DASHBOARD
  // ==========================================

  return (
    <div className="admin-dashboard">

      {/* ======================================
          HEADER
      ====================================== */}

      <header className="admin-dashboard-header">

        <div className="admin-dashboard-brand">

          <div className="admin-dashboard-logo">
            W
          </div>

          <div>
            <h1>
              Win In Life
            </h1>

            <span>
              Child Development Centre
            </span>
          </div>

        </div>

        <div className="admin-dashboard-actions">

          <button
            type="button"
            className="admin-refresh-button"
            onClick={refreshReservations}
            disabled={refreshing}
          >
            <RefreshCw
              size={17}
              className={
                refreshing
                  ? "refresh-spinning"
                  : ""
              }
            />

            {refreshing
              ? "Refreshing..."
              : "Refresh"}
          </button>

          <div className="admin-user">

            <strong>
              {admin?.name || "Administrator"}
            </strong>

            <span>
              {admin?.email || ""}
            </span>

          </div>

          <button
            type="button"
            className="admin-logout-button"
            onClick={logout}
          >
            <LogOut size={17} />
            Logout
          </button>

        </div>

      </header>

      {/* ======================================
          MAIN
      ====================================== */}

      <main className="admin-dashboard-main">

        {/* ====================================
            HEADING
        ==================================== */}

        <div className="admin-dashboard-heading">

          <div>

            <span className="admin-section-label">
              ADMIN PANEL
            </span>

            <h2>
              Assessment Requests
            </h2>

            <p>
              Manage enquiries and assessment
              requests from families.
            </p>

          </div>

          <div className="admin-request-count">

            <strong>
              {reservations.length}
            </strong>

            <span>
              Total Requests
            </span>

          </div>

        </div>

        {/* ====================================
            STATISTICS
        ==================================== */}

        <div className="admin-stats">

          <div className="admin-stat-card">

            <span>
              Total
            </span>

            <strong>
              {reservations.length}
            </strong>

          </div>

          <div className="admin-stat-card admin-stat-pending">

            <span>
              Pending
            </span>

            <strong>
              {pendingCount}
            </strong>

          </div>

          <div className="admin-stat-card admin-stat-confirmed">

            <span>
              Confirmed
            </span>

            <strong>
              {confirmedCount}
            </strong>

          </div>

          <div className="admin-stat-card admin-stat-completed">

            <span>
              Completed
            </span>

            <strong>
              {completedCount}
            </strong>

          </div>

          <div className="admin-stat-card">

            <span>
              Cancelled
            </span>

            <strong>
              {cancelledCount}
            </strong>

          </div>

        </div>

        {/* ====================================
            FILTERS
        ==================================== */}

        <div className="admin-filters">

          {/* SEARCH */}

          <div className="admin-search-box">

            <Search size={18} />

            <input
              type="text"
              placeholder="Search parent, child, phone or email..."
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(e.target.value)
              }
            />

          </div>

          {/* STATUS FILTER */}

          <div className="admin-filter-box">

            <Filter size={17} />

            <select
              value={statusFilter}
              onChange={(e) =>
                setStatusFilter(e.target.value)
              }
            >

              <option value="all">
                All Statuses
              </option>

              <option value="pending">
                Pending
              </option>

              <option value="confirmed">
                Confirmed
              </option>

              <option value="completed">
                Completed
              </option>

              <option value="cancelled">
                Cancelled
              </option>

            </select>

          </div>

          {/* ==================================
              SERVICE FILTER
          ================================== */}

          <div className="admin-filter-box">

            <Filter size={17} />

            <select
              value={serviceFilter}
              onChange={(e) =>
                setServiceFilter(e.target.value)
              }
            >

              <option value="all">
                All Services
              </option>

              {allServices.map((service) => (
                <option
                  key={service.value}
                  value={service.value}
                >
                  {service.label}
                </option>
              ))}

            </select>

          </div>

          {/* CLEAR FILTERS */}

          {(searchTerm ||
            statusFilter !== "all" ||
            serviceFilter !== "all") && (
            <button
              type="button"
              className="admin-clear-filters"
              onClick={clearFilters}
            >
              Clear Filters
            </button>
          )}

        </div>

        {/* ====================================
            ERROR
        ==================================== */}

        {error && (
          <div className="admin-dashboard-error">
            {error}
          </div>
        )}

        {/* ====================================
            EMPTY STATE
        ==================================== */}

        {!error &&
          reservations.length === 0 && (
            <div className="admin-empty-state">

              <CalendarDays size={42} />

              <h3>
                No assessment requests yet
              </h3>

              <p>
                New requests submitted through
                the website will appear here.
              </p>

            </div>
          )}

        {/* ====================================
            NO FILTER RESULTS
        ==================================== */}

        {!error &&
          reservations.length > 0 &&
          filteredReservations.length === 0 && (
            <div className="admin-empty-state">

              <Search size={42} />

              <h3>
                No matching requests
              </h3>

              <p>
                Try changing your search or
                filters.
              </p>

              <button
                type="button"
                className="admin-clear-filters"
                onClick={clearFilters}
              >
                Clear Filters
              </button>

            </div>
          )}

        {/* ====================================
            REQUEST LIST
        ==================================== */}

        {filteredReservations.length > 0 && (
          <div className="admin-request-list">

            {filteredReservations.map(
              (reservation) => (
                <article
                  key={reservation._id}
                  className="admin-request-card"
                >

                  {/* CARD HEADER */}

                  <div className="admin-request-card-header">

                    <div>

                      <h3>
                        {reservation.childName}
                      </h3>

                      <p>
                        Parent / Guardian:{" "}
                        <strong>
                          {reservation.parentName}
                        </strong>
                      </p>

                    </div>

                    <span
                      className={getStatusClass(
                        reservation.status
                      )}
                    >
                      {reservation.status}
                    </span>

                  </div>

                  {/* DETAILS */}

                  <div className="admin-request-details">

                    <div className="admin-request-detail">

                      <span>
                        Phone
                      </span>

                      <strong>
                        {reservation.phone}
                      </strong>

                    </div>

                    {reservation.email && (
                      <div className="admin-request-detail">

                        <span>
                          Email
                        </span>

                        <strong>
                          {reservation.email}
                        </strong>

                      </div>
                    )}

                    <div className="admin-request-detail">

                      <span>
                        Service
                      </span>

                      <strong>
                        {allServices.find(
                          (service) =>
                            service.value ===
                            reservation.service
                        )?.label ||
                          reservation.service}
                      </strong>

                    </div>

                    <div className="admin-request-detail">

                      <span>
                        Preferred Date
                      </span>

                      <strong>
                        {reservation.preferredDate}
                      </strong>

                    </div>

                  </div>

                  {/* MESSAGE */}

                  {reservation.message && (
                    <div className="admin-request-message">

                      <span>
                        Message
                      </span>

                      <p>
                        {reservation.message}
                      </p>

                    </div>
                  )}

                  {/* ACTIONS */}

                  <div className="admin-request-actions">

                    {reservation.status ===
                      "pending" && (
                      <button
                        type="button"
                        className="admin-action-confirm"
                        onClick={() =>
                          updateStatus(
                            reservation._id,
                            "confirmed"
                          )
                        }
                      >
                        <CheckCircle size={16} />
                        Confirm
                      </button>
                    )}

                    {reservation.status ===
                      "confirmed" && (
                      <button
                        type="button"
                        className="admin-action-complete"
                        onClick={() =>
                          updateStatus(
                            reservation._id,
                            "completed"
                          )
                        }
                      >
                        <CheckCircle size={16} />
                        Mark Completed
                      </button>
                    )}

                    {reservation.status !==
                      "cancelled" &&
                      reservation.status !==
                        "completed" && (
                        <button
                          type="button"
                          className="admin-action-cancel"
                          onClick={() =>
                            updateStatus(
                              reservation._id,
                              "cancelled"
                            )
                          }
                        >
                          <XCircle size={16} />
                          Cancel
                        </button>
                      )}

                    <button
                      type="button"
                      className="admin-action-delete"
                      onClick={() =>
                        deleteReservation(
                          reservation._id
                        )
                      }
                    >
                      <Trash2 size={16} />
                      Delete
                    </button>

                  </div>

                  {/* CREATED DATE */}

                  <div className="admin-request-created">

                    <Clock size={14} />

                    Submitted{" "}
                    {new Date(
                      reservation.createdAt
                    ).toLocaleString()}

                  </div>

                </article>
              )
            )}

          </div>
        )}

      </main>
    </div>
  );
};

export default AdminDashboard;