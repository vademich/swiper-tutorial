import { CommonModule } from '@angular/common';
import {
    Component,
    OnInit,
    CUSTOM_ELEMENTS_SCHEMA,
    ViewChild,
    ElementRef,
    AfterViewInit,
    NgZone,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'app-swiper',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './swiper.component.html',
    styleUrl: './swiper.component.less',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SwiperComponent implements OnInit, AfterViewInit {
    @ViewChild('swiper1') swiper1!: ElementRef<any>;
    @ViewChild('swiper2') swiper2!: ElementRef<any>;

    slides: any[] = []
    routeSub: any;

    constructor(private zone: NgZone, private route: ActivatedRoute) { }

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            const id = params['id'];
            if (id == 1) {
                this.slides = [
                    { image: 'https://swiperjs.com/demos/images/nature-1.jpg' },
                    { image: 'https://swiperjs.com/demos/images/nature-2.jpg' },
                    { image: 'https://swiperjs.com/demos/images/nature-3.jpg' },
                    { image: 'https://swiperjs.com/demos/images/nature-4.jpg' },
                    { image: 'https://swiperjs.com/demos/images/nature-5.jpg' },
                    { image: 'https://swiperjs.com/demos/images/nature-6.jpg' },
                    { image: 'https://swiperjs.com/demos/images/nature-7.jpg' },
                    { image: 'https://swiperjs.com/demos/images/nature-8.jpg' },
                    { image: 'https://swiperjs.com/demos/images/nature-10.jpg' },
                ];
            } else {
                this.slides = [
                    { image: 'https://swiperjs.com/demos/images/nature-6.jpg' },
                    { image: 'https://swiperjs.com/demos/images/nature-7.jpg' },
                    { image: 'https://swiperjs.com/demos/images/nature-8.jpg' },
                    { image: 'https://swiperjs.com/demos/images/nature-10.jpg' },
                    { image: 'https://swiperjs.com/demos/images/nature-1.jpg' },
                    { image: 'https://swiperjs.com/demos/images/nature-2.jpg' },
                    { image: 'https://swiperjs.com/demos/images/nature-3.jpg' },
                ];
            }
        });
    }

    ngAfterViewInit() {
        this.zone.runOutsideAngular(() => {
            const swiperParams = {
                breakpoints: {
                    100: {
                        slidesPerView: 3,
                    },
                    640: {
                        slidesPerView: 5,
                    },
                    1024: {
                        slidesPerView: 6,
                    },
                },
            };

            const swiperParams1 = {
                spaceBetween: 10
            };

            Object.assign(this.swiper2.nativeElement, swiperParams1);
            this.swiper1.nativeElement.initialize();

            // now we need to assign all parameters to Swiper element
            Object.assign(this.swiper2.nativeElement, swiperParams);
            this.swiper2.nativeElement.initialize();
        });
    }
}