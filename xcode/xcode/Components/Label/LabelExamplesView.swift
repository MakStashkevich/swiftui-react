
import SwiftUI

struct LabelExamplesView: View {
    var body: some View {
        List {
            Label("Star Item", systemImage: "star.fill")
            Label("Heart Item", systemImage: "heart.fill")
                .font(.title)
                .foregroundColor(.red)
            Label {
                Text("Custom Label")
                    .font(.headline)
            } icon: {
                Image(systemName: "gearshape.fill")
                    .foregroundColor(.blue)
            }
        }
        .navigationTitle("Label Examples")
    }
}

struct LabelExamplesView_Previews: PreviewProvider {
    static var previews: some View {
        LabelExamplesView()
    }
}
