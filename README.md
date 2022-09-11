# AngularUnittesting


# RXJSfeatureswithAngular

<p align="center">
<a  target="blank"><img src="https://miro.medium.com/max/725/1*EKbZZOcx2IfRAe4bYF_eeQ.png" width="320" alt="Coder Logo" /></a>
</p>

Working with unit testing on any project that at least tries to be serious is a must, it doesn’t matter if you choose to use a TDD (test-driven development) approach or not you are going to have a lot of benefits by using it.

In this article first, we are going to shortly mention the benefits of unit testing and then we are going to create a full example of angular unit testing using jasmine and karma explaining each step of the process.

Benefits of Unit Testing
Let´s go first through what I think are the main reasons to use unit testing in your solution…

Improve the design of implementations.
Start coding a feature without giving it a lot of thought to the design is a very common mistake among developers. Using unit testing is going to enforce you to think and re-think the design, and if you are using TDD the impact is even bigger.
Allows refactoring.
Since you already have tests that ensure that everything is working as expected, you can easily add changes to that code with the certainty that you are not adding any bugs.
Add new features without breaking anything.
When you are adding a new feature you can run the tests to ensure that you ain’t breaking any other part of the application.
There are many more, but these three are already such a big win on any project that for me are deal sealers. but if you are not convinced yet let’s mention a couple more.

Tests are good documentation.
Tests make developers more confident about their work.

You can say that all their benefits come at a great cost: TIME, but this is completely false. All the time that using unit testing may cost you is going to be small compared to the time they are going to save you later when you are introducing new features or making any refactors. The time spent resolving bugs is going to be drastically smaller than if you are not using unit testing.


So We will be Looking These Angular-Unit-Testin with Jasmine and Karma   features and Learn as we go on.
1. Introduction to Angular Unit testing. Why we need to suse Unit testing in Angular App.
2. Automated Testing Overview.Types of Tests Present in Angular Application - Angular. 
3. Difference Between Isolated Unit Tests, Shallow Unit tests and Deep Integration Tests - Angular.
4. Create a New Angu;ar Pllication, check karma configuration and run tests with npm Test Command.
5. Create out First test Suite and Spec file in Angular Apllication and run the Test - Angular.
6. Step By Step Implementation of the Calculator Service with jasmine Specification - Angular.
7. testin the Service which has another service injected through Dependency Injection.
8. Mocking the Injected service using createSpyObj method and spy on the methods.
9. Using before Each setup medthod to structure the Angular test Cases for Avoiing Repetitive Code.
10. Write Test Cases for the Angular Pipe Using Isolated unit tests- Angular.
11. Writing Isolated Unit test Cases for an Angular Service - Angular.
12. Create Posts Compoenent and Posts Service for getting posts data - Angular Testing. 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
