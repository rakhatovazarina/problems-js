<script context="module" lang="ts">
  export interface UserData {
    login: string;
    name: string;
    avatar_url: string;
    html_url: string;
    bio: string;
    created_at: string;
    location?: string;
    twitter_username?: string;
  }
</script>

<script>
  export let userData: UserData;
</script>

<style>
</style>

<section class="main-2">
  {#if userData != null}
    <img class="main-img" src={userData.avatar_url} alt="cat">
    <h1 class="main-octo">
      {userData.name}
      <p class="main-octocat">
        <a href={userData.html_url} target="_blank">{userData.login}</a>
      </p>
      <p class="main-bio">{userData.bio}</p>
    </h1>
    <p class="main-data"> Joined {userData.created_at}</p>
  {:else}
    <img class="main-img" src="Bitmap.svg" alt="cat">
    <h1 class="main-octo">
      The Octocat
      <p class="main-octocat">@octocat</p>
      <p class="main-bio">This profile has no bio</p>
    </h1>
    <p class="main-data"> Joined 25 Jan 2011</p>
  {/if}
</section>

<footer class="footer">
  <div class="footer-1">
    {#if userData != null}
      <p><img src="001-office.svg" alt="location">{userData.location}</p>
      <p><img src="002-url.svg" alt="twitter">{userData.twitter_username}</p>
    {:else}
      <p><img src="003-pin.svg" alt="location"> San Francisco</p>
      <p><img src="004-twitter.svg" alt="twitter"> Not Available</p>
    {/if}
  </div>
  <div class="footer-2">
    <p><img src="003-pin.svg" alt="link"> https://github.blog</p>
    <p><img src="004-twitter.svg" alt="office"> @github</p>
  </div>
</footer>
