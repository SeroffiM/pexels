export const getPhotos = async (api: string): Promise<any> => {
  const response = await fetch(api, {
    headers: {
      Authorization: '563492ad6f917000010000014640aabb4e9d420cbe1c0df7daf4c2bf',
    },
  });
  const data = await response.json();
  return data;
};
