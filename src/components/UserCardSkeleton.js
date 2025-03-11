import "./UserCardSkeleton.css"

function UserCardSkeleton() {
  return (
    <div className="user-card-skeleton">
      <div className="skeleton-header">
        <div className="skeleton-avatar"></div>
        <div className="skeleton-info">
          <div className="skeleton-name"></div>
          <div className="skeleton-username"></div>
        </div>
      </div>
      <div className="skeleton-body">
        <div className="skeleton-detail"></div>
        <div className="skeleton-detail"></div>
        <div className="skeleton-detail"></div>
        <div className="skeleton-button"></div>
      </div>
    </div>
  )
}

export default UserCardSkeleton

