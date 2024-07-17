export default function Products(props) {
  return (
    <div class="col">
      <div class="card shadow-sm">
        <img
          class="bd-placeholder-img card-img-top"
          width="100%"
          height="225"
          role="img"
          aria-label={props.name}
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
          src={props.img}
        ></img>
        <div class="card-header">{props.description}</div>
        <div class="card-body">
          <p class="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button type="button" class="btn btn-sm btn-outline-secondary">
                View
              </button>
            </div>

            <small class="text-body-secondary">
              <p>Price {props.price}</p>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}
