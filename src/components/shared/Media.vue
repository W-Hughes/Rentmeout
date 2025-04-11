<template>
  <div class="media">
    <div class="temp">
      <header class="media__header">
        <img
          src="@/assets/images/create__listing.png"
          alt="Media Image"
          class="media__image"
        />
      </header>
      <div class="media__body">
        <h3 class="media__title">Listing Creation</h3>
        <p class="media__description">
          Share your machinery with the world and turn idle assets into income.
        </p>
        <ul class="description__details--item">
          <li class="description__details-list sm:block first:block">
            <h3
              class="detail__subtitle hover:opacity-60 transition-colors duration-500"
            >
              Empower Wealth Creation
            </h3>
            <p class="detail__text">
              Transform idle machinery into a source of passive income.
            </p>
          </li>
          <li class="description__details-list hidden sm:block first:block">
            <h3
              class="detail__subtitle hover:opacity-60 transition-colors duration-500"
            >
              Showcase Your Assets
            </h3>
            <p class="detail__text">
              Create detailed listings and discover the value of your machinery
              at a glance.
            </p>
          </li>
        </ul>
      </div>
    </div>
    <div class="media__footer">
      <a href="#" class="media__link anim-underline--link">Read More</a>
    </div>
  </div>
  <div class="media">
    <div class="temp">
      <header class="media__header">
        <img
          src="@/assets/images/discover__listing.png"
          alt="Media Image"
          class="media__image"
        />
      </header>
      <div class="media__body">
        <h3 class="media__title">Listing Discovery</h3>
        <p class="media__description">
          Explore a wide range of listings to find the perfect home or tool for
          your needs.
        </p>
        <ul class="description__details--item">
          <li class="description__details-list sm:block first:block">
            <h3
              class="detail__subtitle hover:opacity-60 transition-colors duration-500"
            >
              Discover with Ease
            </h3>
            <p class="detail__text">
              Browse a diverse catalog of listings, using category filters the
              perfect match.
            </p>
          </li>
          <li class="description__details-list hidden sm:block first:block">
            <h3
              class="detail__subtitle hover:opacity-60 transition-colors duration-500"
            >
              View Detailed Options
            </h3>
            <p class="detail__text">
              Access comprehensive listing details, including photos, prices,
              and availability, so you can make informed decisions without
              guesswork
            </p>
          </li>
        </ul>
      </div>
    </div>
    <div class="media__footer">
      <a href="#" class="media__link anim-underline--link">Read More</a>
    </div>
  </div>
  <div class="media">
    <div class="temp">
      <header class="media__header">
        <img
          src="@/assets/images/book__listing.png"
          alt="Media Image"
          class="media__image"
        />
      </header>
      <div class="media__body">
        <h3 class="media__title">Booking Management</h3>
        <p class="media__description">
          Secure the tools or spaces you need, exactly when you need them
        </p>
        <ul class="description__details--item">
          <li class="description__details-list sm:block first:block">
            <h3
              class="detail__subtitle hover:opacity-60 transition-colors duration-500"
            >
              Plan with Confidence
            </h3>
            <p class="detail__text">
              Book listings for specific dates, with ease.
            </p>
          </li>
          <li class="description__details-list hidden sm:block first:block">
            <h3
              class="detail__subtitle hover:opacity-60 transition-colors duration-500"
            >
              Secure Your Reservation
            </h3>
            <p class="detail__text">
              Use our straightforward booking system to lock in your dates.
            </p>
          </li>
        </ul>
      </div>
    </div>
    <div class="media__footer">
      <a href="#" class="media__link anim-underline--link">Read More</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "MediaComponent",
};
</script>

<style>
/* Main component */
.media {
  @apply border border-solid border-gray-200 shadow-lg px-[1rem] lg:pt-[4rem]  lg:px-[2rem] py-[2rem] rounded-xl max-h-screen my-[2rem];
}

/* media__temp */
.temp {
  @apply flex flex-col sm:flex-row justify-center lg:gap-[2rem] lg:justify-start;
}

.media__header {
  @apply h-auto w-auto sm:w-[14rem] md:w-[19rem] lg:w-[25rem] shrink-0;
}
.media__image {
  @apply mx-0 h-[18rem] sm:w-[14rem] lg:mr-2 md:h-[20rem] md:w-[19rem] w-full rounded-t-xl sm:max-w-[25rem] lg:h-[25rem] lg:w-[26rem] object-cover;
}

/* Body */
.media__body {
  @apply sm:min-w-[20rem] lg:text-[1.35rem] lg:flex-grow  lg:pl-[1.5rem] md:text-[1rem]  sm:pl-[1rem] text-sm sm:text-[0.85rem] pt-[2rem] text-primary-dark max-h-full lg:max-h-full lg:max-w-full;
}
.media__title {
  @apply text-[1.5rem]  tracking-tight md:tracking-wide font-semibold leading-[1.2] sm:leading-none pb-[1rem] lg:text-[3rem] lg:pb-[2rem] md:text-[2.25rem] md:pb-[1.8rem];
}
.media__description {
  @apply tracking-tight font-normal lg:text-[1.16rem] pb-[1rem] md:pb-[1.75rem] lg:pb-[1.8rem];
}
.description__details--item {
  @apply grid sm:grid-cols-2 gap-2;
}

.detail__subtitle {
  @apply text-[1rem] pb-[0.5rem] lg:pt-[1rem] lg:text-[1.45rem] lg:tracking-tight lg:mb-[0.5rem] md:pb-[0.5rem] sm:tracking-wider font-semibold text-primary-dark-2;
}
.detail__text {
  @apply mx-0 md:text-[0.95rem] lg:text-[1rem] leading-[1.5];
}

.media__link {
  @apply text-primary-dark-2 text-sm font-semibold mt-[1.5rem] md:text-[1rem] lg:text-[1.12rem] inline-block;
}
.media__link::after {
  @apply inline-block text-[1.2rem];
  content: "...";
}

.media__footer {
  @apply sm:pl-[0.5rem];
}
.anim-underline--link {
  @apply relative pb-[0.875rem];
}
.anim-underline--link::after {
  @apply h-[0.2rem] w-0 bg-primary;
  content: "";
  position: absolute;
  bottom: 11.5px;
  left: 0;
  transition: width 0.2s ease-in-out;
}
.anim-underline--link:hover::after {
  @apply w-full;
}
</style>
