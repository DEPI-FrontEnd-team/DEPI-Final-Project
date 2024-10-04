import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent} from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { WorkExperienceComponent } from '../work-experience/work-experience.component';
import { CoursesComponent } from '../courses/courses.component';
import { ImpactMenaComponent } from '../impact-mena/impact-mena.component';
import { ChannelOverviewComponent } from '../channel-overview/channel-overview.component';
import { SkilsComponent } from '../skils/skils.component';
import { SpeakingsComponent } from '../speakings/speakings.component';
import { BlogsComponent } from '../blogs/blogs.component';
import { TestmonialsComponent } from '../testmonials/testmonials.component';
import { ContactComponent } from '../contact/contact.component';
import { CallToActionComponent } from '../call-to-action/call-to-action.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeComponent, AboutComponent,
  WorkExperienceComponent,CoursesComponent,ImpactMenaComponent,
  ChannelOverviewComponent,SkilsComponent,SpeakingsComponent,
  BlogsComponent, TestmonialsComponent,ContactComponent,CallToActionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portfolio';
}
