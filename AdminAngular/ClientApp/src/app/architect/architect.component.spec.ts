import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { ArchitectComponent } from './architect.component';

let component: ArchitectComponent;
let fixture: ComponentFixture<ArchitectComponent>;

describe('architect component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ArchitectComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(ArchitectComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});
