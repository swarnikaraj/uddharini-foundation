"use client";
import { useState, useEffect } from "react";
import { FaPlay, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Gallery.css";

const Gallery = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);
  const [paginationType, setPaginationType] = useState("loadmore"); // 'pages' or 'loadmore'
  const itemsPerPage = 8;

  useEffect(() => {
    fetchItems(currentPage);
  }, [currentPage]);

  const fetchItems = async (page) => {
    setLoading(true);
    try {
      const response = await fetch(
        `/api/gallery?page=${page}&limit=${itemsPerPage}`
      );
      const data = await response.json();

      setTotalItems(data.totalItems);
      setTotalPages(data.totalPages);

      if (paginationType === "loadmore" && page > 1) {
        // Append new items
        setItems((prev) => [...prev, ...data.items]);
      } else {
        // Replace with new page items
        setItems(data.items);
        if (paginationType === "pages") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }
    } catch (error) {
      console.error("Error fetching gallery items:", error);
    } finally {
      setLoading(false);
    }
  };

  const loadMore = () => {
    if (currentPage < totalPages && !loading) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const togglePaginationType = () => {
    setPaginationType((prev) => (prev === "pages" ? "loadmore" : "pages"));
    setCurrentPage(1);
    setItems([]);
  };

  const openModal = (item) => setSelectedItem(item);
  const closeModal = () => setSelectedItem(null);

  const navigateModal = (direction) => {
    const currentIndex = items.findIndex((item) => item.id === selectedItem.id);
    let newIndex;

    if (direction === "next") {
      newIndex = currentIndex < items?.length - 1 ? currentIndex + 1 : 0;
    } else {
      newIndex = currentIndex > 0 ? currentIndex - 1 : items?.length - 1;
    }

    setSelectedItem(items[newIndex]);
  };

  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-container">
        {/* Header */}
        <div className="gallery-header">
          <h2 className="gallery-title">🎨 Kindness Gallery 🎨</h2>
        </div>

        {/* Stats */}
        <div className="gallery-stats">
          <div className="stat-item">
            <span className="stat-number">{totalItems}</span>
            <span className="stat-label">Total Items</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{currentPage}</span>
            <span className="stat-label">Page</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{items?.length}</span>
            <span className="stat-label">Showing</span>
          </div>
        </div>

        {/* Grid */}
        <div className="pinterest-grid">
          {items.map((item) => (
            <div
              key={item.id}
              className="gallery-card"
              onClick={() => openModal(item)}
            >
              {console.log(item)}
              <div className="card-media">
                {item.type === "image" ? (
                  <img
                    src={item.url}
                    alt={item.title}
                    className="card-image"
                    loading="lazy"
                  />
                ) : (
                  <video src={item.url} className="card-image" controls />
                )}
                {item.type === "video" && (
                  <div className="video-overlay">
                    <FaPlay className="play-icon" />
                  </div>
                )}
                <div className="card-overlay"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        {paginationType === "loadmore" && currentPage < totalPages && (
          <div className="load-more-container">
            <button
              onClick={loadMore}
              disabled={loading}
              className="load-more-btn"
            >
              {loading
                ? "Loading..."
                : `Load More (${totalItems - items?.length} remaining)`}
            </button>
          </div>
        )}

        {/* Loader */}
        {loading && items?.length === 0 && (
          <div className="loading-grid">
            {[...Array(itemsPerPage)].map((_, i) => (
              <div key={i} className="skeleton-card">
                <div className="skeleton-image"></div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedItem && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>
            <button
              className="modal-nav prev"
              onClick={() => navigateModal("prev")}
            >
              <FaChevronLeft />
            </button>
            <button
              className="modal-nav next"
              onClick={() => navigateModal("next")}
            >
              <FaChevronRight />
            </button>
            <div className="modal-media">
              {selectedItem.type === "image" ? (
                <img
                  src={selectedItem.url}
                  alt={selectedItem.title}
                  className="modal-image"
                />
              ) : (
                <video
                  src={selectedItem.url}
                  controls
                  className="modal-image"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
