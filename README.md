Load images in background while showing a placeholder with a blurred thumbnail till the image is fully loaded (Optimize your page initial load time)

This library is under active development and hasn't yet reached its final form.

inspired by this [Medium article](https://medium.com/@jmperezperez/more-examples-of-progressive-image-loading-f258be9f440b)

# Compatibility

- AOT
- Jit
- Custom Design Libraries (Material, ng-bootstrap, etc..)

# Getting Started

### Installation

```sh
npm i --save ngx-lazy-images
```

### Import to App module

```sh
import { LazyImagesModule } from 'ngx-lazy-images';

@NgModule( {
	imports: [
		...
		LazyImagesModule,
	],
	...
} ) export class AppModule { }
```

### Example Usage

Can be found at the [demo page]()

### API

- **largeImgUrl** - the original heavy image url
- **thumbnailUrl** - thumbnail url (200-500KB recommended)
- **styling** - object containing styling properties for the large image eg. **{ 'border-radius': '12%'}**

### TODO

- support for two way binding for the image url (in case the image can change due to a user event).
- support for scroll events and detection of reaching the image elemnt to load
- testing/travis

License
----

MIT