# Riverpod / Freezed / REST - Use Case Analysis

Using [Riverpod](https://pub.dev/packages/riverpod) and [Frezeed](https://pub.dev/packages/freezed) to receive, send, transform and handle (REST) data while keeping the UI updated accordingly - in a clean way. Both packages, Riverpod and Frezeed, have been created by [Remi Rousselet](https://twitter.com/remi_rousselet) who also created the (currently) more popular package Provider.

## Goal

We want to be able to access objects representing our states throughout the app which decide how our UI looks like and behaves (what data to display, what features to use) and handle data as immutable (model) objects which we receive and send to a REST API.

## Setup

We are working on a clean project and are using the following versions:

```
Flutter:    2.8.1 
Dart:       2.15.1
```

Relevant `pubspec.yaml` entries:

```yaml
dependencies:
    ...

    flutter_riverpod: ^1.0.3
    freezed_annotation: ^1.1.0

    json_serializable: ^6.1.3
    json_annotation: ^4.4.0

dev_dependencies:
    ...

    build_runner: ^2.1.7
    freezed: ^1.1.1
```

## Next Chapter

Very nice man

## Backstory

I have been using [MobX](https://pub.dev/packages/mobx) and [Provider](https://pub.dev/packages/provider)/[GetIt](https://pub.dev/packages/get_it) previously to handle states, UI changes and dependency injection. MobX has a convenient `Observer` widget (similar to the `Consumer` widget known from the Provider package) to handle rebuilds where necessary to reflect the current state(s) while offering the so called [reactions](https://pub.dev/packages/mobx#reactions) to do imperative stuff like navigation / showing modals etc. when specific parts of our state(s) change.

‎

*(To see all this in action on a larger scale, feel free to take a look on my open source app [OBS Blade](https://github.com/Kounex/obs_blade) where I included several comments inside the code itself to explain different apsects - especially handling the states.)*

‎

While the combination of MobX with GetIt works quite well, specific aspects and use cases leave room for improvement. Handling async tasks in a genereic manner with MobX for example is not as convenient and produces (unnecessary) boilerplate. MobX also "enforces" mutable stores (states). Properties of those stores are usually marked with the `@observable` annotation which means that `Observer` widgets which reference such properties will rebuild once they change. This means that the state itself will remain the same object while its properties change over time - a cleaner, more understandable and often more performant approach would be to set a new state with the updated properties. You can read about immutability on various resources (this does not mean mutability is a no-go in general). GetIt does it's job well but since in this use case we are using Riverpod, it's not needed.