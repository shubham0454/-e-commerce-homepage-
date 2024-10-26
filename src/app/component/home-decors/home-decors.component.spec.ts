import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDecorsComponent } from './home-decors.component';

describe('HomeDecorsComponent', () => {
  let component: HomeDecorsComponent;
  let fixture: ComponentFixture<HomeDecorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeDecorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeDecorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
